""" Control Led lights and physical buttons, as connected to GPIO """

import time
import logging
from functools import wraps
import enum
import asyncio

main_logger = logging.getLogger("main")


def log_info(msg):
    print(msg)
    main_logger.info(msg)


# gpio is not always enabled, for example when running application on pc
try:
    from gpiozero import Button, LED
    log_info("GPIO enabled")
    is_enabled = True
except:
    log_info("GPIO disabled. Failed to import from gpiozero")
    is_enabled = False


def if_enabled(func):
    """ Run function if (and only if) gpio is enabled """
    @wraps(func)
    def wrapper(*args, **kwargs):
        if is_enabled:
            return func(*args, **kwargs)
    return wrapper


class PowerButton():
    def __init__(self, pin_button, pin_led_green, pin_led_red):
        self.button = Button(pin_button, pull_up=False, bounce_time=0.1)
        self.led_green = LED(pin_led_green)
        self.led_red = LED(pin_led_red)
        self.button.when_pressed = self.on_button_pressed
        self.handle_reboot = lambda: None  # to be used by client

    def on_button_pressed(self):
        start = time.time()
        minimum_time_reboot = 3  # seconds
        elapsed = 0  # seconds
        while self.button.is_active:
            elapsed = time.time() - start
            if elapsed > minimum_time_reboot:
                self.off()
                break
            time.sleep(0.1)

        if elapsed > minimum_time_reboot:
            log_info("Init reboot by power button")
            self.handle_reboot()

    def red(self):
        self.led_red.on()
        self.led_green.off()

    def green(self):
        self.led_red.off()
        self.led_green.on()

    def off(self):
        self.led_red.off()
        self.led_green.off()


class USB_Button():
    """ USB port and button including led """

    def __init__(self, name, pin_button, pin_led):
        self.name = name
        self.button = Button(pin_button, pull_up=False, bounce_time=0.1)
        self.led = LED(pin_led)
        self.activated = False
        self.button.when_pressed = self.on_button_pressed
        self.handle_on = lambda: None  # to be used by client
        self.handle_off = lambda: None  # to be used by client

    def on_button_pressed(self):
        # wait until button is released (really needed?)
        while self.button.is_active:
            time.sleep(0.1)
        self.activated = not self.activated
        if self.activated:
            self.led.on()
            log_info(f"usb_button {self.name} activated")
            self.handle_on()
        else:
            self.led.off()
            log_info(f"usb_button {self.name} deactivated")
            self.handle_off()


if is_enabled:
    power_button = PowerButton("GPIO17", "GPIO22", "GPIO27")  # Pin 11, 15, 13 (button, green, red)
    usb1_button = USB_Button("usb1", "GPIO25", "GPIO16")  # Pin 22, 36 (button, led)
    usb2_button = USB_Button("usb2", "GPIO23", "GPIO24")  # Pin 16, 18 (button, led)
    led_green = LED("GPIO5")  # pin 29
    led_yellow = LED("GPIO6")  # pin 31
    led_red = LED("GPIO26")  # pin 37


def test():
    power_button.red()
    time.sleep(1)
    power_button.green()
    time.sleep(1)
    led_green.on()
    time.sleep(1)
    led_yellow.on()
    time.sleep(1)
    led_red.on()
    time.sleep(1)
    usb1_button.on_button_pressed()
    time.sleep(1)
    usb2_button.on_button_pressed()
    time.sleep(1)
    led_green.off()
    led_yellow.off()
    led_red.off()
    usb1_button.on_button_pressed()
    usb2_button.on_button_pressed()


async def test_async():
    power_button.red()
    await asyncio.sleep(1)
    power_button.green()
    await asyncio.sleep(1)
    led_green.on()
    await asyncio.sleep(1)
    led_yellow.on()
    await asyncio.sleep(1)
    led_red.on()
    await asyncio.sleep(1)
    usb1_button.on_button_pressed()
    await asyncio.sleep(1)
    usb2_button.on_button_pressed()
    await asyncio.sleep(1)
    led_green.off()
    led_yellow.off()
    led_red.off()
    usb1_button.on_button_pressed()
    usb2_button.on_button_pressed()


if __name__ == "__main__":
    assert is_enabled, "gpio is not enabled"
    test()
    while True:
        time.sleep(10)
