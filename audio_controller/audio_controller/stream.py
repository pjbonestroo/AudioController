""" Read audio stream, and play it, using installed vlc player (libvlc) """
# python standard lib
import sys
import os
import time
import signal
import traceback
import io
import tempfile
from contextlib import contextmanager
import ctypes
from subprocess import Popen, PIPE
from multiprocessing import Process, Queue
import threading
import logging

# externals

main_logger = logging.getLogger("main")

#
# Using VLC to play url stream
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

#
# Using ffmpeg to play url stream
#


def play_from_url(url: str, queue: Queue):
    """ Play from url, using ffmpeg """
    print(f"playing {url}")
    # 'exec' is needed to be able to easily stop/terminate the process
    cmd = f'exec ffmpeg -i "{url}" -f alsa default'
    proc = None

    def create_process():
        nonlocal proc
        proc = Popen(args=cmd, stdin=PIPE, stdout=PIPE, stderr=PIPE, cwd=None, bufsize=0, shell=True)

    create_process()

    def stop():
        proc.terminate()

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
                main_logger.info(f"Process play_from_url stopped unexpectedly. Restarting...")
                create_process()
                time.sleep(3)  # do not try to create process too many times

    print(f"stopped playing {url}")


queue = None
process = None


def play(url):
    global queue, process
    if queue is None:
        queue = Queue()
        process = Process(target=play_from_url, args=(url, queue,))
        process.start()


def stop():
    global queue, process
    if queue is not None:
        queue.put("stop")
        process.join()  # TODO possibly do not wait, but just kill (lets try this first)
        queue = None
        process = None


def measure_urls(urls):
    """ Start process which switches between urls, and measures input level """
    pass


class TestUrl():
    ro1 = "http://ro1.reformatorischeomroep.nl:8003/live"
    ro1_s = "https://radio1.reformatorischeomroep.nl/live.m3u"  # werkt niet
    ro2 = "http://ro2.reformatorischeomroep.nl:8020/live"
    ro3 = "http://ro3.reformatorischeomroep.nl:8072/live"
    noord = "http://meeluisteren.gergemrijssen.nl:8000/noord"
    zuid = "http://meeluisteren.gergemrijssen.nl:8000/zuid"
    west = "http://meeluisteren.gergemrijssen.nl:8000/west"


def test_url():
    print("Play")
    play(TestUrl.ro1)
    time.sleep(5)
    print("Stop")
    stop()
    print("Stopped")


def test_sounddevice():
    import sounddevice as sd

    def callback(indata, outdata, frames, time, status):
        if status:
            print(status)
        outdata[:] = indata
    with sd.RawStream(channels=2, dtype='int24', callback=callback):
        while True:
            sd.sleep(1000)
    print('done')


def test_ffmpeg():
    cmd = 'exec ffmpeg -i "http://ro1.reformatorischeomroep.nl:8003/live" -f alsa default'
    process = Popen(args=cmd, stdin=PIPE, stdout=PIPE, stderr=PIPE, cwd=None, bufsize=0, shell=True)

    def stop():
        process.kill()

    time.sleep(10)
    stop()
    print("done")


def test():
    return
    # test_url()
    # test_sounddevice()
    test_ffmpeg()
    sys.exit(0)
