class SaveHistory:
    def __init__(self):
        self.saved_states = []

    def save(self, state):
        self.saved_states.append(state)

    def restore(self, index):
        if 0 <= index < len(self.saved_states):
            return self.saved_states[index]
        return None
