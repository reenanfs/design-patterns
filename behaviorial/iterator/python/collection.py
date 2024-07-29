from abc import ABC, abstractmethod

from interface import Iterator


class Collection(ABC):
    @abstractmethod
    def create_iterator(self) -> Iterator:
        pass
