from abstraction import RemoteControl


class BasicRemote(RemoteControl):
    def toggle_power(self):
        if self._device.is_on():
            self._device.off()
        else:
            self._device.on()


class AdvancedRemote(RemoteControl):
    def toggle_power(self):
        if self._device.is_on():
            self._device.off()
        else:
            self._device.on()

    def mute(self):
        print("Device is muted")
