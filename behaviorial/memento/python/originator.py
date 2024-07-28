from memento import GameState


class Game:
    def __init__(self, level, health):
        self.level = level
        self.health = health

    def save(self):
        return GameState(self.level, self.health)

    def restore(self, state):
        self.level = state.level
        self.health = state.health

    def display(self):
        return f"Level: {self.level}, Health: {self.health}"
