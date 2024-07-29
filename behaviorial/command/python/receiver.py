from abc import ABC, abstractmethod


class Device(ABC):
    @abstractmethod
    def on(self):
        pass

    @abstractmethod
    def off(self):
        pass

    @abstractmethod
    def is_on(self):
        pass


class Light(Device):
    def __init__(self):
        self._state = False

    def on(self):
        self._state = True
        print('The light is on')

    def off(self):
        self._state = False
        print('The light is off')

    def is_on(self):
        return self._state


class Fan(Device):
    def __init__(self):
        self._state = False

    def on(self):
        self._state = True
        print('The fan is on')

    def off(self):
        self._state = False
        print('The fan is off')

    def is_on(self):
        return self._state
