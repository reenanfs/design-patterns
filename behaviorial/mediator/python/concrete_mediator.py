from component import Button, Checkbox, Component, TextField
from mediator import Mediator


class DialogMediator(Mediator):
    def __init__(self, checkbox: Checkbox, text_field: TextField, submit_button: Button):
        self.checkbox = checkbox
        self.checkbox.set_mediator(self)
        self.text_field = text_field
        self.text_field.set_mediator(self)
        self.submit_button = submit_button
        self.submit_button.set_mediator(self)

    def notify(self, sender: Component, event: str):
        if sender == self.checkbox and event == 'checked':
            self.text_field.set_visible(self.checkbox.is_checked())
        if sender == self.submit_button and event == 'click':
            self.submit_form()

    def submit_form(self):
        print("Form Submitted")
        print("Checkbox Checked:", self.checkbox.is_checked())
        if self.checkbox.is_checked():
            print("Text Field Value:", self.text_field.get_value())
