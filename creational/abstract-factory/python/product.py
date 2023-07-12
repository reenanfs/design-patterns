from abc import ABC, abstractmethod


class Logger(ABC):
    @abstractmethod
    def log(self, message):
        pass


class ConfigReader(ABC):
    @abstractmethod
    def read_config(self):
        pass
