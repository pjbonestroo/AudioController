#!/bin/bash
source pyenv/bin/activate
cd audio_controller
python3 -m audio_controller
deactivate
cd ..
