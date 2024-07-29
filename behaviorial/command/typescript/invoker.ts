import { Command } from './interface';

export class Button {
	private command: Command | null = null;
	private label: string;

	constructor(label: string) {
		this.label = label;
	}

	setCommand(command: Command): void {
		this.command = command;
	}

	press(): void {
		if (this.command) {
			console.log(`Button ${this.label} pressed`);
			this.command.execute();
		}
	}

	undo(): void {
		if (this.command) {
			console.log(`Button ${this.label} undo`);
			this.command.undo();
		}
	}
}

export class RemoteControl {
	private buttons: Map<string, Button> = new Map();

	addButton(label: string, button: Button): void {
		this.buttons.set(label, button);
	}

	pressButton(label: string): void {
		const button = this.buttons.get(label);
		if (button) {
			button.press();
		} else {
			console.log(`Button ${label} not found`);
		}
	}

	undoButton(label: string): void {
		const button = this.buttons.get(label);
		if (button) {
			button.undo();
		} else {
			console.log(`Button ${label} not found`);
		}
	}
}
