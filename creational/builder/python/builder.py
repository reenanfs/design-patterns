from abc import ABC, abstractmethod
from product import Pizza


class PizzaBuilder(ABC):
    def __init__(self):
        self._pizza = Pizza()

    @abstractmethod
    def set_size(self, size: str):
        pass

    @abstractmethod
    def add_toppings(self):
        pass

    @abstractmethod
    def set_crust_type(self):
        pass

    @abstractmethod
    def set_sauce(self):
        pass

    @abstractmethod
    def set_cheese(self):
        pass

    @abstractmethod
    def build(self):
        pass
