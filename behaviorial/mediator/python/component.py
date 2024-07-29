from mediator import Component


class Checkbox(Component):
    def __init__(self):
        super().__init__()
        self.checked = False

    def toggle(self):
        self.checked = not self.checked
        print(f"Checkbox toggled: {self.checked}")
        self.mediator.notify(self, 'checked')

    def is_checked(self):
        return self.checked


class TextField(Component):
    def __init__(self):
        super().__init__()
        self.value = ''
        self.visible = False

    def set_visible(self, visible: bool):
        self.visible = visible
        print(f"Text field visibility: {self.visible}")

    def set_value(self, value: str):
        self.value = value

    def get_value(self):
        return self.value


class Button(Component):
    def click(self):
        print("Button clicked")
        self.mediator.notify(self, 'click')
