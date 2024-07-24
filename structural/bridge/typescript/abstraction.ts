import { Device } from "./implementor";


export abstract class RemoteControl {
	protected device: Device;

	constructor(device: Device) {
		this.device = device;
	}

	abstract togglePower(): void;
}
