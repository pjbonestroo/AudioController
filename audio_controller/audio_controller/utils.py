""" """

import hashlib
import os, sys
from pathlib import Path


# file to save usernames and passwords
file_users = Path.home() / ".audio_controller_users.txt"

if not file_users.exists():
    with open(file_users, 'w'):
        pass


def clear_users():
    with open(file_users, 'w') as f:
        f.writelines([])


def add_user(username: str, password: str):
    assert ";" not in username
    pw = hashlib.blake2b(password.encode()).hexdigest()
    line = f"{username};{pw}\n"
    with open(file_users, 'a') as f:
        f.write(line)


def check_user(username: str, password: str):
    pw = hashlib.blake2b(password.encode()).hexdigest()
    with open(file_users, 'r') as f:
        lines = f.readlines()
    for line in lines:
        [username_, pw_] = line.split(";")
        pw_ = pw_.strip()  # remove "\n"
        if username == username_ and pw == pw_:
            return True
    return False


def test():

    return

    sys.exit(0)
