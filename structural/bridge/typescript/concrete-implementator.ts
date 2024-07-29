import { Device } from "./implementor";

export class TV implements Device {
	private powerOn: boolean = false;

	on(): void {
		this.powerOn = true;
		console.log('TV is now ON');
	}

	off(): void {
		this.powerOn = false;
		console.log('TV is now OFF');
	}

	isOn(): boolean {
		return this.powerOn;
	}
}

export class Radio implements Device {
	private powerOn: boolean = false;

	on(): void {
		this.powerOn = true;
		console.log('Radio is now ON');
	}

	off(): void {
		this.powerOn = false;
		console.log('Radio is now OFF');
	}

	isOn(): boolean {
		return this.powerOn;
	}
}
