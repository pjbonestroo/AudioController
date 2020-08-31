""" Read audio stream, and play it, using installed vlc player (libvlc) """
# python standard lib
import sys
import os
import time
import traceback
import io
import tempfile
from contextlib import contextmanager
import ctypes
from multiprocessing import Process, Queue

# externals
import urllib3
import vlc
from vlc import CallbackDecorators

MediaReadCb = CallbackDecorators.MediaReadCb


def from_url(url):
    while True:
        try:
            http = urllib3.PoolManager()
            r = http.request('GET', url, preload_content=False)
            for chunk in r.stream(32 * 100):
                yield chunk
            r.release_conn()
        except:
            print(f"Exception while reading from url {url}:")
            print(traceback.format_exc())
            time.sleep(5)


def play_from_url(url: str, queue: Queue):

    print(f"playing {url}")
    generator = from_url(url)

    @MediaReadCb
    def read_cb(opaque, buffer, length):
        new_data = next(generator)
        c = len(new_data)
        buffer_array = ctypes.cast(buffer, ctypes.POINTER(ctypes.c_char * length))
        ctypes.memmove(buffer_array, new_data, c)
        return c

    instance = vlc.Instance()
    player = instance.media_player_new()
    media = instance.media_new_callbacks(None, read_cb, seek_cb=None, close_cb=None, opaque=None)
    player.set_media(media)
    player.play()

    # wait until other process puts something in queue
    queue.get(block=True)


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


def test():
    print("Play")
    play(TestUrl.ro1)
    time.sleep(5)
    print("Stop")
    stop()
    print("Stopped")

    sys.exit(0)
