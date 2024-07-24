from implementator import Device


class TV(Device):
    def __init__(self):
        self._power_on = False

    def on(self):
        self._power_on = True
        print("TV is now ON")

    def off(self):
        self._power_on = False
        print("TV is now OFF")

    def is_on(self) -> bool:
        return self._power_on


class Radio(Device):
    def __init__(self):
        self._power_on = False

    def on(self):
        self._power_on = True
        print("Radio is now ON")

    def off(self):
        self._power_on = False
        print("Radio is now OFF")

    def is_on(self) -> bool:
        return self._power_on
