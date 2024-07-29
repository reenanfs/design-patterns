import { Button, Checkbox, Component, TextField } from './component';
import { Mediator } from './mediator';

export class DialogMediator implements Mediator {
	private checkbox: Checkbox;
	private textField: TextField;
	private submitButton: Button;

	constructor(checkbox: Checkbox, textField: TextField, submitButton: Button) {
		this.checkbox = checkbox;
		this.checkbox.setMediator(this);
		this.textField = textField;
		this.textField.setMediator(this);
		this.submitButton = submitButton;
		this.submitButton.setMediator(this);
	}

	notify(sender: Component, event: string): void {
		if (sender === this.checkbox && event === 'checked') {
			this.textField.setVisible(this.checkbox.isChecked());
		}
		if (sender === this.submitButton && event === 'click') {
			this.submitForm();
		}
	}

	private submitForm(): void {
		console.log('Form Submitted');
		console.log('Checkbox Checked:', this.checkbox.isChecked());
		if (this.checkbox.isChecked()) {
			console.log('Text Field Value:', this.textField.getValue());
		}
	}
}
