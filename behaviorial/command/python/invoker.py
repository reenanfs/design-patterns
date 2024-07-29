class Button:
    def __init__(self, label):
        self.label = label
        self.command = None

    def set_command(self, command):
        self.command = command

    def press(self):
        if self.command:
            print(f'Button {self.label} pressed')
            self.command.execute()

    def undo(self):
        if self.command:
            print(f'Button {self.label} undo')
            self.command.undo()


class RemoteControl:
    def __init__(self):
        self.buttons = {}

    def add_button(self, label, button):
        self.buttons[label] = button

    def press_button(self, label):
        button = self.buttons.get(label)
        if button:
            button.press()
        else:
            print(f'Button {label} not found')

    def undo_button(self, label):
        button = self.buttons.get(label)
        if button:
            button.undo()
        else:
            print(f'Button {label} not found')
