from abc import ABC, abstractmethod


class State(ABC):
    @abstractmethod
    def play(self, player):
        pass

    @abstractmethod
    def pause(self, player):
        pass

    @abstractmethod
    def stop(self, player):
        pass
