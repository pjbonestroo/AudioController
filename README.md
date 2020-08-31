# Introduction

Control the routing of audio using a Raspberry Pi. This software runs on a Raspberry Pi and communicates with an ITEC audio controller (ITEC MultiMix) using the serial port. It provides a webinterface to easily connect an audio input source to multiple audio destinations.

Further, it can read audio from an url, and send it to a configurable input of the ITEC.

The userinferface is created in the Dutch language. It consists of 2 pages; Control and Settings:

<img src="docs/pictures/screenshot_1.png" alt="drawing" width="700"/>
<p>
<img src="docs/pictures/screenshot_2.png" alt="drawing" width="700"/>
<p>



# Howto deploy on raspberry pi

This is tested on Raspberry Pi version 3.

## 1. Install vlc player

```
sudo apt update
sudo apt upgrade
sudo apt install -y vlc
```

## 2. Install Python and dependencies

### 2.1 Install python 3.7

Python 3.7 is preinstalled on the newest Raspbian OS.


### 2.2 Create a virtual environment

```
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

Copy from local to pi (use correct ip-address):

```
scp -r ./audio_controller pi@192.168.1.96:~/AudioController
scp ./run_audio_controller.sh pi@192.168.1.96:~/AudioController
scp ./audio_controller.service pi@192.168.1.96:~/AudioController
scp ./audio_controller.html pi@192.168.1.96:~/Desktop
scp ./start_browser.sh pi@192.168.1.96:~/AudioController
scp ./start_browser.service pi@192.168.1.96:~/AudioController
```

To install an update of the software it is usually enough to run the first command from above.


## 4. Create auto startup

Copy on pi, from from home dir to /etc/systemd/system/

```
sudo cp ~/AudioController/audio_controller.service /etc/systemd/system/audio_controller.service
sudo chmod 777 ~/AudioController/run_audio_controller.sh
sudo cp ~/AudioController/start_browser.service /etc/systemd/system/start_browser.service
sudo chmod 777 ~/AudioController/start_browser.sh
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

TBD



