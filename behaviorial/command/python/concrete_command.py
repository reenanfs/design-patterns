

from interface import Command


class ToggleCommand(Command):
    def __init__(self, device):
        self.device = device

    def execute(self):
        if self.device.is_on():
            self.device.off()
        else:
            self.device.on()

    def undo(self):
        self.execute()
