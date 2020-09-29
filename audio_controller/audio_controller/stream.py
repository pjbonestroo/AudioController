""" Read audio stream, and play it, using installed vlc player (libvlc) """
# python standard lib
import sys
import os
import time
from typing import List
import ctypes
from subprocess import Popen, PIPE
from multiprocessing import Process, Queue
import logging

# externals

main_logger = logging.getLogger("main")


def print_info(msg):
    print(msg)
    main_logger.info(msg)

#
# Using ffmpeg to play url stream
#


def execute_ffmpeg(command: str, queue: Queue):
    """ Execute ffmpeg command, until queue gets message. Retry when command exits. """
    # 'exec' is needed to be able to easily stop/terminate the process
    cmd = f'exec {command} >/dev/null 2>&1'
    proc = None

    def create_process():
        nonlocal proc
        print_info(f"execute_ffmpeg create_process {command}")
        proc = Popen(args=cmd, stdin=None, stdout=None, stderr=None, cwd=None, bufsize=0, shell=True)

    create_process()

    def stop():
        print_info(f"execute_ffmpeg stop {command}")
        proc.terminate()
        proc.wait()

    while True:
        # check if process must stop
        must_stop = None
        try:
            must_stop = queue.get(block=True, timeout=1)
        except:
            pass
        if must_stop is not None:
            stop()
            break
        else:
            # check if process is stopped (by accident)
            is_running = proc.poll() is None
            if not is_running:
                print_info(f"execute_ffmpeg stopped unexpectedly {command}")
                create_process()
                time.sleep(3)  # do not try to create process too many times


class FfmpegProcess():

    def __init__(self, cmd):
        self.queue = Queue()
        self.process = Process(target=execute_ffmpeg, args=(cmd, self.queue,), daemon=True)
        self.process.start()
        self.stopped = False

    def stop(self):
        if not self.stopped:
            self.stopped = True
            self.queue.put("stop")
            self.process.join()

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.stop()


def play_process(url):
    """ Create and return process to read audio from url and send to analog output"""
    return FfmpegProcess(f'ffmpeg -i {url} -f alsa default')


def send_process(urls: List[str]):
    """ Create and return process to read audio from analog input and send to (icecast?) urls """
    # input = "-f alsa -i hw:0" # default input
    input = "-f alsa -i hw:CARD=CODEC,DEV=0"  # usb-sound-card input: run command 'arecord -L' to see a full list of possibilities
    outputs = []
    for url in urls:
        url_splitted = url.split(";")
        url = url_splitted[0]
        if len(url_splitted) > 1 and len(url_splitted[1]) > 0:
            bitrate = url_splitted[1]
        else:
            bitrate = '128K'
        content_type = "-content_type audio/mpeg -f mp3"
        bitrate_ = f"-b:a {bitrate} -minrate {bitrate} -maxrate {bitrate} -bufsize {bitrate}"
        outputs.append(f'{content_type} {bitrate_} "{url}"')
    outputs = " ".join(outputs)
    cmd = f'ffmpeg {input} {outputs}'
    return FfmpegProcess(cmd)


class TestUrl():
    ro1 = "http://ro1.reformatorischeomroep.nl:8003/live"
    ro1_s = "https://radio1.reformatorischeomroep.nl/live.m3u"  # werkt niet
    ro2 = "http://ro2.reformatorischeomroep.nl:8020/live"
    ro3 = "http://ro3.reformatorischeomroep.nl:8072/live"
    noord = "http://meeluisteren.gergemrijssen.nl:8000/noord"
    zuid = "http://meeluisteren.gergemrijssen.nl:8000/zuid"
    west = "http://meeluisteren.gergemrijssen.nl:8000/west"


def test_ffmpeg():
    """ stream to icecast """
    input_url = TestUrl.ro1
    password = input("Icecast password: ")
    icecast_url = f"icecast://source:{password}@173.249.6.236:8000/babyfoon"
    content_type = "-content_type audio/mpeg -f mp3"
    bitrate = "-b:a 64K -minrate 64K -maxrate 64K -bufsize 64K"
    # play on standard out:
    cmd = f'ffmpeg -i {input_url} -f alsa default'
    # send input url to icecast:
    cmd = f'ffmpeg -i {input_url} {content_type} {bitrate} "{icecast_url}"'
    # send recording to icecast:
    cmd = f'ffmpeg -f alsa -i hw:0 {content_type} {bitrate} "{icecast_url}"'
    with FfmpegProcess(cmd):
        while True:
            time.sleep(30)


def test():
    return
    test_ffmpeg()
    # test_sounddevice()
    # test_ffmpeg()
    sys.exit(0)


if __name__ == '__main__':
    test_ffmpeg()


#
# Deprecated: Using VLC to play url stream
#


# import urllib3
# import vlc
# from vlc import CallbackDecorators

# MediaReadCb = CallbackDecorators.MediaReadCb


# def from_url(url):
#     while True:
#         try:
#             http = urllib3.PoolManager()
#             r = http.request('GET', url, preload_content=False)
#             for chunk in r.stream(32 * 100):
#                 yield chunk
#             r.release_conn()
#         except:
#             print(f"Exception while reading from url {url}:")
#             print(traceback.format_exc())
#             time.sleep(5)


# def play_from_url(url: str, queue: Queue):
#     print(f"playing {url}")
#     generator = from_url(url)

#     @MediaReadCb
#     def read_cb(opaque, buffer, length):
#         new_data = next(generator)
#         c = len(new_data)
#         buffer_array = ctypes.cast(buffer, ctypes.POINTER(ctypes.c_char * length))
#         ctypes.memmove(buffer_array, new_data, c)
#         return c

#     instance = vlc.Instance()
#     player = instance.media_player_new()
#     media = instance.media_new_callbacks(None, read_cb, seek_cb=None, close_cb=None, opaque=None)
#     player.set_media(media)
#     player.play()

#     # wait until other process puts something in queue
#     queue.get(block=True)


# def test_sounddevice():
#     import sounddevice as sd

#     def callback(indata, outdata, frames, time, status):
#         if status:
#             print(status)
#         outdata[:] = indata
#     with sd.RawStream(channels=2, dtype='int24', callback=callback):
#         while True:
#             sd.sleep(1000)
#     print('done')
