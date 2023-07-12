from abc import ABC, abstractmethod

from product import Logger


class LoggerFactory(ABC):
    @abstractmethod
    def create_logger(self) -> Logger:
        pass
