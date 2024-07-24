import { RemoteControl } from "./abstraction";

export class BasicRemote extends RemoteControl {
	togglePower(): void {
		if (this.device.isOn()) {
			this.device.off();
		} else {
			this.device.on();
		}
	}
}

export class AdvancedRemote extends RemoteControl {
	togglePower(): void {
		if (this.device.isOn()) {
			this.device.off();
		} else {
			this.device.on();
		}
	}

	mute(): void {
		console.log('Device is muted');
	}
}
