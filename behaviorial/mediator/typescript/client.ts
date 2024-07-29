import { Button, Checkbox, TextField } from './component';
import { DialogMediator } from './concrete-mediator';

const checkbox = new Checkbox();
const textField = new TextField();
const submitButton = new Button();

const dialog = new DialogMediator(checkbox, textField, submitButton);

checkbox.toggle();
textField.setValue('Some text');
submitButton.click();

checkbox.toggle();
submitButton.click();
