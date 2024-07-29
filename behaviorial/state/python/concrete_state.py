

from interface import State


class PlayingState(State):
    def play(self, player):
        print("Already playing.")

    def pause(self, player):
        print("Pausing the player.")
        player.set_state(PausedState())

    def stop(self, player):
        print("Stopping the player.")
        player.set_state(StoppedState())


class PausedState(State):
    def play(self, player):
        print("Resuming the player.")
        player.set_state(PlayingState())

    def pause(self, player):
        print("Already paused.")

    def stop(self, player):
        print("Stopping the player.")
        player.set_state(StoppedState())


class StoppedState(State):
    def play(self, player):
        print("Starting the player.")
        player.set_state(PlayingState())

    def pause(self, player):
        print("Cannot pause. Player is stopped.")

    def stop(self, player):
        print("Already stopped.")
