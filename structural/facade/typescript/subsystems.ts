export class TV {
	turnOn() {
		console.log('TV: Turning on...');
	}

	turnOff() {
		console.log('TV: Turning off...');
	}

	changeChannel(channel: string) {
		console.log(`TV: Changing to channel ${channel}`);
	}
}

export class DVDPlayer {
	turnOn() {
		console.log('DVD Player: Turning on...');
	}

	turnOff() {
		console.log('DVD Player: Turning off...');
	}

	play() {
		console.log('DVD Player: Playing DVD...');
	}

	stop() {
		console.log('DVD Player: Stopping DVD...');
	}
}

export class SoundSystem {
	turnOn() {
		console.log('Sound System: Turning on...');
	}

	turnOff() {
		console.log('Sound System: Turning off...');
	}

	setVolume(volume: number) {
		console.log(`Sound System: Setting volume to ${volume}`);
	}
}
