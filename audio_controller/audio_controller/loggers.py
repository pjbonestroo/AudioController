from pathlib import Path
import logging

log_dir = Path.home() / "audio_controller_logs"


if not log_dir.exists():
    log_dir.mkdir()


main_logger = logging.getLogger("main")
loggers = "main tornado.access tornado.application tornado.general".split()


def setup_logging():
    for name in loggers:
        logger = logging.getLogger(name)
        logger.setLevel(logging.DEBUG)
        assert not logger.hasHandlers(), "Logger is supposed to have only one handler"
        filename = str(log_dir / f"{name}.log")
        handler = logging.handlers.RotatingFileHandler(filename, maxBytes=1000000, backupCount=5)
        formatter = logging.Formatter(fmt=r'%(asctime)s - %(levelname)s - %(message)s', datefmt=r'%Y-%m-%d %H:%M:%S')
        handler.setFormatter(formatter)
        logger.addHandler(handler)


setup_logging()
