# Introduction

Control the routing of audio using a Raspberry Pi. This software runs on a Raspberry Pi and communicates with an ITEC audio controller (ITEC MultiMix) using the serial port. It provides a webinterface to easily connect an audio input source to multiple audio destinations.

Further, it can read audio from an url, and send it to a configurable input of the ITEC.

The userinferface is created in the Dutch language. It consists of 2 pages; Control and Settings:

## Control screen
<img src="docs/pictures/screenshot_1.png" alt="drawing" width="700"/>
<p>

## Settings screen
<img src="docs/pictures/screenshot_2.png" alt="drawing" width="700"/>
<p>

# Howto deploy on raspberry pi

This is tested on Raspberry Pi version 3.
OS: Raspberry Pi OS version 2020-08-20.

## 1. Install vlc player

```
sudo apt update
sudo apt upgrade
sudo apt install -y vlc
```

## 2. Install Python and dependencies

### 2.1 Install python 3.7

Python 3.7+ is preinstalled on the OS. Check this by running:
```
python3 --version
```

### 2.2 Create a virtual environment

```
mkdir ~/AudioController
cd ~/AudioController
python3 -m venv pyenv
```

### 2.3 Install dependencies

```
source ./pyenv/bin/activate
python -m pip install --upgrade pip
python -m pip install pyserial
python -m pip install tornado
python -m pip install urllib3
python -m pip install python-vlc
```

## 3. Copy audio_controller project/package to pi

### 3.1 Enable ssh

### 3.2 Copy from local to pi

Copy from local to pi (use correct ip-address):

```
PI_IP=192.168.1.110
scp -r ./audio_controller pi@${PI_IP}:~/AudioController
scp ./run_audio_controller.sh pi@${PI_IP}:~/AudioController
scp ./audio_controller.service pi@${PI_IP}:~/AudioController
scp ./audio_controller.html pi@${PI_IP}:~/Desktop
```

To install an update of the software it is usually enough to run the first command from above.


## 4. Create auto startup

Copy on pi, from home dir to /etc/systemd/system/

```
cd /home/pi/
sudo cp ./AudioController/audio_controller.service /etc/systemd/system/audio_controller.service
sudo chmod 777 ./AudioController/run_audio_controller.sh
```

Some commands to start and stop service:

```
sudo systemctl status audio_controller.service
sudo systemctl start audio_controller.service
sudo systemctl stop audio_controller.service
sudo systemctl restart audio_controller.service
sudo systemctl enable audio_controller.service
sudo systemctl disable audio_controller.service
```

To start the browser in kiosk mode, add the following lines to `/etc/xdg/lxsession/LXDE-pi/autostart`:
```
@xset s off
@xset -dpms
@xset s noblank
@chromium --kiosk http://localhost:5000/
```
If it does not work, the last line should (maybe) be:
```
@chromium-browser --kiosk http://localhost:5000/
```

For example the full file content becomes:
```
@lxpanel --profile LXDE-pi
@pcmanfm --desktop --profile LXDE-pi
@xscreensaver -no-splash
@xset s off
@xset -dpms
@xset s noblank
@chromium --kiosk http://localhost:5000/
```

## 5. Enable remote login

### 5.1 Create file with usernames and passwords

From directory audio_controller/audio_controller:
```
python3
import utils
utils.add_user("<username>", "<password>")
assert utils.check_user("<username>", "<password>"), "Configuration failed"
exit()
```

### 5.2 Copy file to root home directory

```
scp ~/.audio_controller_users.txt pi@${PI_IP}:~/
```
And then on the raspberry pi:
```
sudo mv /home/pi/.audio_controller_users.txt /home/root/
```

## Extras

Disable updates

Enable NTP to have time updated
```
timedatectl status
sudo timedatectl set-ntp True
```
## Remarks

Make sure to place user file and settings file in home of root, not in home or pi user. AudioController runs as root user.

# How to contribute

User Linux as host. Windows is also possible, but not covered by this manual.
Install vlc 

- development from Linux
- install vlc, vscode, python3.7
- etc



