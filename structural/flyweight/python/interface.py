from abc import ABC, abstractmethod


class Shape(ABC):
    @abstractmethod
    def draw(self, x: int, y: int, radius: int) -> None:
        pass
