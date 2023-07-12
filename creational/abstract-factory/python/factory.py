from abc import ABC, abstractmethod

from product import Logger, ConfigReader


class LoggingFactory(ABC):
    @abstractmethod
    def create_logger(self) -> Logger:
        pass

    @abstractmethod
    def create_config_reader(self) -> ConfigReader:
        pass
