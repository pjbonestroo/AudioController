
__pragma__('alias', 'S', '$')  # to use jQuery library with 'S' instead of '$'


class Delayer():
    """ Simple delayer to call functions not too many times in a certain timespan. """

    def __init__(self, timespan):
        self.timespan = timespan  # timespan in milliseconds
        self.last_time = None  # last time executed in milliseconds since 1970/01/01
        self.function_holder = None

    def now(self):
        return __new__(Date()).getTime()

    def execute(self, func):
        """ Function func gets executed (without arguments) if no other funcion is executed for a certain timespan.
        Otherwise the function is remembered and executed when the time is elapsed.
        If other calls are done in the meantime, only the last function gets executed when time is elapsed.
        If an other function call is just finished, this call will execute immediately.
        """
        if self.last_time is None:
            self.execute_now(func)
        else:
            wait_time = self.last_time + self.timespan - self.now()
            if wait_time < 0:
                self.execute_now(func)
            else:
                if self.function_holder is None:
                    # place new timeout
                    self.function_holder = func

                    def execute_later():
                        self.execute_now(self.function_holder)
                        self.function_holder = None
                        self.last_time = None
                    setTimeout(execute_later, wait_time)
                else:
                    # hold new function for already placed timeout
                    self.function_holder = func

    def execute_now(self, func):
        self.last_time = self.now()
        func()


class Delayer2():
    """ Even simpler delayer which always delays on first hit. Optional time reset during executing subsequent calls. """

    def __init__(self, timespan, reset_delay=False):
        self.timespan = timespan  # timespan in milliseconds
        self.reset_delay = reset_delay
        self.last_timeout = None
        self.last_deferred = None
        self.hit_time = None

    def now(self):
        return __new__(Date()).getTime()

    def check_call_allowed(self):
        x = self.last_timeout is None
        y = self.last_deferred is None
        assert (x and y) or (not x and not y)  # Cannot use execute and await_execute at same time

    def execute(self, func):
        """ Function func gets executed (without arguments) after timespan.
            If another function was already waiting, that one is canceled,
            and this new function will be executed instead of the old one,
            on the time the old one was scheduled (if reset_delay is false),
            or after a fresh delay (if reset_delay is true).
        """
        assert self.last_deferred is None  # Cannot use execute and await_execute at same time

        def execute_(f):
            f()
            self.last_timeout = None
        if self.last_timeout is None:
            self.last_timeout = setTimeout(execute_.bind(None, func), self.timespan)
            self.hit_time = self.now()
        else:
            clearTimeout(self.last_timeout)
            time_left = 0.0
            if self.reset_delay:
                time_left = self.timespan
            else:
                time_left = Math.max(0, self.timespan - (self.now() - self.hit_time))
            self.last_timeout = setTimeout(execute_.bind(None, func), time_left)

    async def await_execute(self):
        """ Return True if function should execute, False otherwise """
        self.check_call_allowed()

        deferred = S.Deferred()

        def execute_(r):
            deferred.resolve(r)
            self.last_timeout = None
            self.last_deferred = None

        if self.last_timeout is None:
            self.last_timeout = setTimeout(execute_.bind(None, True), self.timespan)
            self.last_deferred = deferred
            self.hit_time = self.now()
        else:
            clearTimeout(self.last_timeout)
            self.last_deferred.resolve(False)  # it could happen that it is already resolved to True
            time_left = 0.0
            if self.reset_delay:
                time_left = self.timespan
            else:
                time_left = Math.max(0, self.timespan - (self.now() - self.hit_time))
            self.last_timeout = setTimeout(execute_.bind(None, True), time_left)
            self.last_deferred = deferred

        return deferred.promise()
