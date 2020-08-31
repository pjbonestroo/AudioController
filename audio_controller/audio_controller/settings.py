""" Module which handles settings, which are configurable and thus persistent """
import sys
from typing import List
from pathlib import Path
import pickle
from dataclasses import dataclass, field, asdict

#
# Classes and default settings
#


@dataclass
class Settings:
    """ Settings including field types and default values """
    title: str = "Noorderkerk"
    nr_IN_ports: int = 8  # nr of IN ports on ITEC
    nr_OUT_ports: int = 4  # nr of OUT ports on ITEC
    port_IN_for_streams: str = 'IN4'  # IN port which is used by this device (raspberry pi) to put audio from stream on
    connect_source_destination: bool = False  # on/off switch: when False, no IN port is routed to OUT port
    enable_option_auto_switch: bool = False  # to be set by administrator, to enable/disable the option to enable auto scan and switch
    enable_auto_switch: bool = False  # when True, the IN ports belonging to all enabled sources are scanned, and when there is a signal, the source is automatically selected
    timeout_auto_switch: int = 15  # minutes to wait after signal is awa


@dataclass
class Source:
    id: int = field(init=False)
    name: str
    enabled: bool
    port_url: str
    scan_prio: int
    db_level: int
    selected: bool


@dataclass
class Destination:
    id: int = field(init=False)
    name: str
    enabled: bool
    port_url_file: str
    selected: bool


def default_sources():
    """ Default sources, used as initial and factory defaults """
    result = [
        Source('Kerkzaal', True, 'IN1', 1, -60, False),
        Source('Trouwzaal', True, 'IN2', 0, -60, False),
        Source('Zaal 3', True, 'IN3', 0, -60, False),
        Source('Microfoon', False, 'IN5', 0, -60, False),
        Source('Zuiderkerk', True, 'http://meeluisteren.gergemrijssen.nl:8000/zuid', 0, -60, False),
        Source('De Tabernakel', True, 'http://meeluisteren.gergemrijssen.nl:8000/west', 0, -60, False),
        Source('Ref. Omroep 1', False, 'http://ro1.reformatorischeomroep.nl:8003/live', 2, -60, False),
        Source('Ref. Omroep 2', False, 'http://ro2.reformatorischeomroep.nl:8020/live', 3, -60, False),
        Source('Ref. Omroep 3', False, 'http://ro3.reformatorischeomroep.nl:8072/live', 4, -60, False),
    ]
    for i, obj in enumerate(result):
        obj.id = i
    return result


def default_destinations():
    """ Default destinations, used as initial and factory defaults """
    result = [
        Destination('Internet', True, 'OUT1', True),
        Destination('HF scanners', True, 'OUT2', True),
        Destination('Opslaan', False, 'file://', False),
    ]
    for i, obj in enumerate(result):
        obj.id = i
    return result

#
# Stores / databases
#


# file to save settings (including sources and destinations)
file = Path.home() / ".audio_controller_settings.pickle"

settings = Settings()
sources: List[Source] = []
destinations: List[Destination] = []


#
# Save and load
#

def clear_and_update(store: dict):
    """ Clear current settings and update it with values in store. """
    global settings
    for obj in [sources, destinations]:
        obj.clear()
    settings = store['settings']
    # settings.__init__(**asdict(store['settings']))  # alternative to do not replace object
    for obj in store['sources']: sources.append(obj)
    for obj in store['destinations']: destinations.append(obj)


def load():
    """ Load settings from file, if available. Return True on success, False otherwise. """
    if file.exists():
        try:
            with open(file, 'rb') as f:
                store = pickle.loads(f.read())
                clear_and_update(store)
                return True
        except:
            return False
    return False


def save():
    """ Save all settings to file """
    with open(file, 'wb') as f:
        store = {'settings': settings, 'sources': sources, 'destinations': destinations}
        f.write(pickle.dumps(store))


def restore():
    """ Restore settings and use all defaults. Save to file """
    store = {'settings': Settings(), 'sources': default_sources(), 'destinations': default_destinations()}
    clear_and_update(store)
    save()


def init_settings():
    """ Try to load settings from file. If not possible, restore default settings. """
    if not load():
        restore()


init_settings()

#
# Validation of values
#


def get_port_nr(port: str, prefix="IN"):
    """ Get number of IN or OUT port, or None if 'port' is not a valid value. """
    # compare with maximum port nr according current settings
    max_nr = settings.nr_IN_ports if prefix == "IN" else settings.nr_OUT_ports
    try:
        assert port.startswith(prefix)
        port_nr = int(port[len(prefix):])
        assert 0 < port_nr <= max_nr
    except:
        return None
    return port_nr


def get_IN_port(port: str) -> int:
    """ Get number of IN port, or None if 'port' is not a valid value. """
    return get_port_nr(port, "IN")


def is_IN_port(port: str):
    """ Return True if port is an IN port. False otherwise. """
    return get_IN_port(port) is not None


def get_OUT_port(port: str) -> int:
    """ Get number of OUT port, or None if 'port' is not a valid value. """
    return get_port_nr(port, "OUT")


def is_OUT_port(port: str):
    """ Return True if port is an OUT port. False otherwise. """
    return get_OUT_port(port) is not None


def is_url(value: str):
    """ Return True if value is an url. False otherwise. """
    return value.startswith("http")


def is_file(value: str):
    """ Return True if value is an direction to a file. False otherwise. """
    return value.startswith("file")


def validate_settings(obj: Settings):
    """ Return True if settings are correct, False otherwise. Only check values, not types. Possibly correct values. """
    obj.nr_IN_ports = max(1, min(100, obj.nr_IN_ports))
    obj.nr_OUT_ports = max(1, min(8, obj.nr_OUT_ports))  # cannot be more than 8 (length of byte...)
    if not is_IN_port(obj.port_IN_for_streams):
        return False
    # turn auto-switch off, if option is disabled
    if obj.enable_auto_switch and not obj.enable_option_auto_switch:
        obj.enable_auto_switch = False
    obj.timeout_auto_switch = max(0, min(60 * 24, obj.timeout_auto_switch))
    return True


assert validate_settings(Settings()), "Default settings are not valid"


def validate_source_attribute(name: str, value):
    """ Validate value for attribute with name of a Source object.
    Return value, or adjusted value, or None if it is not valid. """
    try:
        if name == 'name':
            return value[0:50].strip()  # max 50 characters
        elif name == 'port_url':
            if not (is_IN_port(value) or is_url(value)):
                return None
            else:
                return value.strip()
        elif name == 'scan_prio':
            value = max(0, min(100, value))
        elif name == 'db_level':
            value = max(-70, min(0, value))
        return value
    except:
        return None


def validate_destination_attribute(name: str, value):
    """ Validate value for attribute with name of a Destination object.
    Return value, or adjusted value, or None if it is not valid. """
    try:
        if name == 'name':
            return value[0:50]  # max 50 characters
        elif name == 'port_url_file':  # must be IN port
            if not (is_OUT_port(value) or is_url(value) or is_file(value)):
                return None
        return value
    except:
        return None

#
# Updates
#


def update_settings(obj: dict):
    """ Update both cached and saved settings with values from 'obj'. """
    # dictonary with key, value = attribute-name, type
    annot = Settings.__annotations__
    backup = Settings().__init__(**asdict(settings))
    for attr in annot.keys():
        if attr in obj:
            try:
                value = annot[attr](obj[attr])  # cast value to type
                setattr(settings, attr, value)
            except:
                pass  # ignore attr
    if validate_settings(settings):
        save()
    else:  # restore
        settings.__init__(**asdict(backup))


def update_sources(new_sources: List[dict]):
    """ Compare sources with current sources, and update the current.
    Each object must contain at least all attributes required to create Source.
    It may contain more, which will be ignored. """
    try:
        # convert all sources to the correct type, let it raise an Exception if its not possible
        fields = Source.__annotations__.copy()
        del fields['id']  # do not copy id
        # create a temporary list, to first validate everything, and then copy
        new_list: List[Source] = []
        for i, obj in enumerate(new_sources):
            new_obj = {}
            # copy attributes
            for attr, value_type in fields.items():
                # cast and validate value
                value = validate_source_attribute(attr, value_type(obj[attr]))
                if value is not None:
                    new_obj[attr] = value
            new_obj = Source(**new_obj)
            new_obj.id = i
            new_list.append(new_obj)
        sources.clear()
        for obj in new_list: sources.append(obj)
        save()
    except:
        pass


def update_destinations(new_destinations: List[dict]):
    """ Compare destinations with current destinations, and update the current.
    Each object must contain at least all attributes required to create Destination.
    It may contain more, which will be ignored. """
    try:
        # convert all sources to the correct type, let it raise an Exception if its not possible
        fields = Destination.__annotations__.copy()
        del fields['id']  # do not copy id
        # create a temporary list, to first validate everything, and then copy
        new_list: List[Destination] = []
        for i, obj in enumerate(new_destinations):
            new_obj = {}
            # copy attributes
            for attr, value_type in fields.items():
                # cast and validate value
                value = validate_destination_attribute(attr, value_type(obj[attr]))
                if value is not None:
                    new_obj[attr] = value
            new_obj = Destination(**new_obj)
            new_obj.id = i
            new_list.append(new_obj)
        destinations.clear()
        for obj in new_list: destinations.append(obj)
        save()
    except:
        pass
