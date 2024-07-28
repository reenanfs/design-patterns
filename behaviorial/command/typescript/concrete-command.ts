import { Command } from './interface';
import { Device } from './receiver';

export class ToggleCommand implements Command {
	private device: Device;

	constructor(device: Device) {
		this.device = device;
	}

	execute(): void {
		if (this.device.isOn()) {
			this.device.off();
		} else {
			this.device.on();
		}
	}

	undo(): void {
		this.execute(); // Toggle back
	}
}
