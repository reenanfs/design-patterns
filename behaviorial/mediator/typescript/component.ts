import { Mediator } from './mediator';

export abstract class Component {
	protected mediator!: Mediator;

	setMediator(mediator: Mediator): void {
		this.mediator = mediator;
	}
}

export class Checkbox extends Component {
	private checked: boolean = false;

	toggle(): void {
		this.checked = !this.checked;
		console.log(`Checkbox toggled: ${this.checked}`);
		this.mediator.notify(this, 'checked');
	}

	isChecked(): boolean {
		return this.checked;
	}
}

export class TextField extends Component {
	private value: string = '';
	private visible: boolean = false;

	setVisible(visible: boolean): void {
		this.visible = visible;
		console.log(`Text field visibility: ${this.visible}`);
	}

	setValue(value: string): void {
		this.value = value;
	}

	getValue(): string {
		return this.value;
	}
}

export class Button extends Component {
	click(): void {
		console.log('Button clicked');
		this.mediator.notify(this, 'click');
	}
}
