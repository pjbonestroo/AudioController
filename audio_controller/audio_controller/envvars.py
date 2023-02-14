"""
Overwrite default values by providing them in the .env file. See .env.sample for an example file.
"""

from decouple import config


REAL_SOUNDCARD_NAME = config("REAL_SOUNDCARD_NAME", default="USB", cast=str)
USE_VIRTUAL_SOUNDCARD = config("USE_VIRTUAL_SOUNDCARD", default=True, cast=bool)
MAX_OUTPUT_URL_STREAMS = config("MAX_OUTPUT_URL_STREAMS", default=2, cast=int)
