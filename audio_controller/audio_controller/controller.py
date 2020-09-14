
""" purpose: route input to output """
# standard lib
from typing import List
import asyncio
import logging

# externals

# internals
from . import itec as itec_module
from .itec import itec
from . import settings
from .settings import Source, Destination
from . import stream


main_logger = logging.getLogger("main")


def get_IN_port(source: Source) -> int:
    """ Get ITEC IN port nr, also if it is an url. """
    result = settings.get_IN_port(source.port_url)
    if result is None:
        result = settings.get_IN_port(settings.settings.port_IN_for_streams)
    return result


class Config:
    """ Holds configuration, which consists of connections from input to output ports.
    """

    def __init__(self):
        self.current_levels = {}  # key = source-id, value = dict (keys: 'level', 'threshold', and 'prio')
        self.url_in = None  # current url which is used as input stream

    def set_routes(self, sources: List[Source], destinations: List[Destination]):
        """ 
        Set routes on ITEC to route audio from selected sources to selected destinations.
        Sources and destinations must all be enabled.
        """

        def route_all_to_null():
            #print("route all to null")
            ports = [get_IN_port(s) for s in sources]
            for p in ports:
                itec.set_route(p, [])

        def stop_start_streaming(url: str):
            """ Stop and start streaming if needed, based on the given url (which can be None) """
            #print("stop start streaming")
            # stop streaming
            if self.url_in is not None and self.url_in != url:
                stream.stop()
                # print("stop")
                self.url_in = None

            # start streaming
            if self.url_in is None and url is not None:
                # print("start")
                stream.play(url)
                self.url_in = url

        if not settings.settings.connect_source_destination or not destinations:
            route_all_to_null()
            stop_start_streaming(None)
            return

        selected_source = None
        for source in sources:
            if source.selected:
                selected_source = source
                break

        if not selected_source:  # nothing selected
            route_all_to_null()
            stop_start_streaming(None)
            return

        # determine which IN-port must be routed
        port_in = None
        url_in = None

        port_in = settings.get_IN_port(selected_source.port_url)
        if port_in is None:
            port_in = settings.get_IN_port(settings.settings.port_IN_for_streams)
            url_in = selected_source.port_url

        # disable all which are not selected
        ports = [get_IN_port(s) for s in sources if not s.selected]
        for p in ports:
            if p != port_in:
                itec.set_route(p, [])
                #print(f"disable port {p}")

        # route the selected port
        ports_out = [settings.get_OUT_port(d.port_url_file) for d in destinations if d.selected]
        # filter OUT ports which are not ITEC ports (e.g. url destinations)
        ports_out = [p for p in ports_out if p is not None]
        #print(f"enable port {port_in}: {ports_out}")
        itec.set_route(port_in, ports_out)
        stop_start_streaming(url_in)


config = Config()


def set_routes():
    """ Setup routes according settings (not taking into account setting auto_switch) """
    enabled_sources = [s for s in settings.sources if s.enabled]
    enabled_destinations = [d for d in settings.destinations if d.enabled]
    config.set_routes(enabled_sources, enabled_destinations)
    config.current_levels.clear()


def get_routes():
    """ Return the routes of the enabled IN ports as text """
    result = f"Looking at usb port {itec_module.get_usb_port()}\n"
    if itec.serial is None:
        result += f"ITEC is not connected.\n"
        return result
    enabled_sources = [s for s in settings.sources if s.enabled]
    ports = list(set([get_IN_port(s) for s in enabled_sources]))
    result += "IN -> OUT\n"
    for p in ports:
        result += f"{p} -> {itec.get_route(p)}\n"
    return result


async def scan_ports():
    """ Continuously scan ports, measure audio level (dB's) and save result in config.
    This method only scans ITEC ports, not the url streams. """
    while True:
        try:
            # look only at enabled sources
            sources = [s for s in settings.sources if s.enabled]

            # cleanup config, deleting all source-ids which not exist
            source_ids = [s.id for s in sources]
            for source_id in list(config.current_levels.keys()):
                if not source_id in source_ids:
                    del config.current_levels[source_id]

            # measure inputlevel by communicating with itec
            for source in sources:
                port = settings.get_IN_port(source.port_url)
                if port is None:
                    port = settings.get_IN_port(settings.settings.port_IN_for_streams)

                if settings.is_IN_port(source.port_url):
                    port = settings.get_IN_port(source.port_url)
                    level = itec.get_input_level(port)
                    config.current_levels[source.id] = {'level': level, 'threshold': source.db_level, 'prio': source.scan_prio}
                elif settings.is_url(source.port_url):
                    if config.url_in == source.port_url:
                        # TODO check if this source is currenly streamed on the IN port
                        # only then it can be updated, ignore otherwise (will be done maybe in next loop)
                        port = settings.get_IN_port(settings.settings.port_IN_for_streams)
                        level = itec.get_input_level(port)
                        config.current_levels[source.id] = {'level': level, 'threshold': source.db_level, 'prio': source.scan_prio}

        except:
            pass
        await asyncio.sleep(2)


async def auto_switch():
    """
    Continuously check if a switch to another source is needed.

    """
    interval_seconds = 5
    while True:
        try:
            if settings.settings.enable_option_auto_switch and settings.settings.enable_auto_switch:
                # difficulty: one port is available to test input of all url-based-sources.
                # solution: switch between url-based-sources and measure level on same IN-port for each
                # drawback: not possible to auto-switch from one url to another

                # determine source_id which should be selected
                source_id = None
                prio = 0

                for s_id, v in config.current_levels.items():
                    level, threshold, source_prio = v['level'], v['threshold'], v['prio']
                    if source_prio > 0 and level >= threshold:
                        if prio == 0 or source_prio < prio:
                            source_id = s_id
                            prio = source_prio

                # routing is only needed if current selection is not source_id
                routing_needed = False
                source: Source = None
                if source_id is not None:
                    sources = [s for s in settings.sources if s.enabled]
                    for s in sources:
                        if s.id == source_id and not s.selected:
                            s.selected = True
                            routing_needed = True
                            source = s
                        elif s.id != source_id and s.selected:
                            s.selected = False
                            routing_needed = True

                if routing_needed:
                    msg = f"Auto switching to source '{source.name}'"
                    print(msg)
                    main_logger.info(msg)
                    settings.save()
                    set_routes()

        except:
            pass
        await asyncio.sleep(interval_seconds)
