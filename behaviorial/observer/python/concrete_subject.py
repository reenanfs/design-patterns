from observer import Observer
from subject import Subject, EventTypes


class EventManager(Subject):
    def __init__(self):
        self.observers: dict[str, set[Observer]] = {}

    def add_listener(self, event_name: EventTypes, observer: Observer):
        if event_name not in self.observers:
            self.observers[event_name] = set()
        self.observers[event_name].add(observer)

    def remove_listener(self, event_name: EventTypes, observer: Observer):
        if event_name in self.observers:
            self.observers[event_name].remove(observer)

    def notify(self, event_name: EventTypes, data):
        if event_name in self.observers:
            for observer in self.observers[event_name]:
                observer.update(data)
