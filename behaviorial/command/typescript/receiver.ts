export interface Device {
	on(): void;
	off(): void;
	isOn(): boolean;
}

export class Light implements Device {
	private state: boolean = false;

	on(): void {
		this.state = true;
		console.log('The light is on');
	}

	off(): void {
		this.state = false;
		console.log('The light is off');
	}

	isOn(): boolean {
		return this.state;
	}
}

export class Fan implements Device {
	private state: boolean = false;

	on(): void {
		this.state = true;
		console.log('The fan is on');
	}

	off(): void {
		this.state = false;
		console.log('The fan is off');
	}

	isOn(): boolean {
		return this.state;
	}
}
