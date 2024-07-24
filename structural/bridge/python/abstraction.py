from abc import ABC, abstractmethod

from implementator import Device


class RemoteControl(ABC):
    def __init__(self, device: Device):
        self._device = device

    @abstractmethod
    def toggle_power(self):
        pass
