from component import Checkbox, TextField, Button
from concrete_mediator import DialogMediator


checkbox = Checkbox()
text_field = TextField()
submit_button = Button()


dialog = DialogMediator(checkbox, text_field, submit_button)


checkbox.toggle()
text_field.set_value('Some text')
submit_button.click()

checkbox.toggle()
submit_button.click()
