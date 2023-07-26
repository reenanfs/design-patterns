from abc import ABC, abstractmethod
from enum import Enum

from observer import Observer


class User:
    def __init__(self, name: str, email: str):
        self.name = name
        self.email = email


class EventTypes(Enum):
    USER_CREATED = "user_created"


class Subject(ABC):
    @abstractmethod
    def add_listener(self, event_name: EventTypes, observer: Observer):
        pass

    @abstractmethod
    def remove_listener(self, event_name: EventTypes, observer: Observer):
        pass

    @abstractmethod
    def notify(self, event_name: EventTypes, data):
        pass
