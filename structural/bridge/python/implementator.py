from abc import ABC, abstractmethod


class Device(ABC):
    @abstractmethod
    def on(self):
        pass

    @abstractmethod
    def off(self):
        pass

    @abstractmethod
    def is_on(self) -> bool:
        pass
