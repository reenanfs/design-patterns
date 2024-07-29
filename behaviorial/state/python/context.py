from concrete_state import StoppedState


class AudioPlayer:
    def __init__(self):
        self.state = StoppedState()

    def set_state(self, state):
        self.state = state

    def play(self):
        self.state.play(self)

    def pause(self):
        self.state.pause(self)

    def stop(self):
        self.state.stop(self)
