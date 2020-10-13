""" Control Led lights and physical buttons, as connected to GPIO """

# from gpiozero import Button, LED
# from signal import pause

# PB_hold_time = 5

# #power led states
# off = 0
# red = 1
# green = 2


# #define button input pins
# Power_Button = Button("GPIO17", pull_up = False, bounce_time = 0.1) #Pin 11
# USB1_Button = Button("GPIO23", pull_up = False, bounce_time = 0.1)  #Pin 16
# USB2_Button = Button("GPIO25", pull_up = False, bounce_time = 0.1)  #Pin 22

# #define LED output pins
# Power_LED1 = LED("GPIO22") #Pin 15
# Power_LED2 = LED("GPIO27") #Pin 13
# USB1_LED = LED("GPIO24")   #Pin 18
# USB2_LED = LED("GPIO16")   #Pin 36
# Green_LED = LED("GPIO5")   #Pin 29
# Yellow_LED = LED("GPIO6")  #Pin 31
# Red_LED = LED("GPIO26")    #Pin 37

# def activate_USB1():
#     if ("USB1 is not active"):  #TODO:
#         #TODO: Activate USB1
#         USB1_LED.on
#     elif ("USB1 is active"):    #TODO:
#         #TODO: De-activate USB1
#         USB1_LED.off

# def activate_USB2():
#     if ("USB2 is not active"):  #TODO:
#         #TODO: Activate USB2
#         USB2_LED.on
#     elif ("USB2 is active"):    #TODO:
#         #TODO: De-activate USB2
#         USB2_LED.off

# def power_button():
#     start_time = time.time()
#     diff = 0

#     while Power_Button.is_active and (diff < PB_hold_time):
#         now_time = time.time()
#         diff = start_time - now_time

#     if diff < hold_time:
#         #TODO: Short press, restart service
#     else:
#         #TODO: Long press, restart PI

# def power_led(state):
#     if state == 1:
#         Power_LED1.on
#         Power_LED2.off
#     elif state == 2:
#         Power_LED1.off
#         Power_LED2.on
#     else:
#         Power_LED1.off
#         Power_LED2.off
#         pass


# Power_Button.when_pressed = power_button
# USB1_Button.when_pressed = activate_USB1
# USB2_Button.when_pressed = activate_USB2

# #Running OK:
# if ("No error"):        #TODO
#     power_led(green)
#     Green_LED.on
#     Yellow_LED.off
#     Red_LED.off
# #Running with warnings:
# elif ("Warnings"):      #TODO
#     power_led(green)
#     Green_LED.off
#     Yellow_LED.on
#     Red_LED.off
# #Running with errors:
# elif ("Errors"):        #TODO
#     power_led(green)
#     Green_LED.off
#     Yellow_LED.off
#     Red_LED.on

# #Not running:
# if ("Program not running") #TODO
#     power_led(red)
#     Green_LED.off
#     Yellow_LED.off
#     Red_LED.off

# pause() #Script needs to keep running, otherwise all GPIO will be set back to default state
