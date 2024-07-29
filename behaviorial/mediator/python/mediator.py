from abc import ABC, abstractmethod


class Component:
    def __init__(self):
        self.mediator = None

    def set_mediator(self, mediator: 'Mediator'):
        self.mediator = mediator


class Mediator(ABC):
    @abstractmethod
    def notify(self, sender: 'Component', event: str):
        pass
