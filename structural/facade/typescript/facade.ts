import { DVDPlayer, SoundSystem, TV } from './subsystems';

export class HomeEntertainmentFacade {
	private tv: TV;
	private dvdPlayer: DVDPlayer;
	private soundSystem: SoundSystem;

	constructor() {
		this.tv = new TV();
		this.dvdPlayer = new DVDPlayer();
		this.soundSystem = new SoundSystem();
	}

	watchMovie(channel: string, volume: number = 20): void {
		this.tv.turnOn();
		this.soundSystem.turnOn();
		this.dvdPlayer.turnOn();

		this.tv.changeChannel(channel);

		this.dvdPlayer.play();

		this.soundSystem.setVolume(volume);
	}

	stopMovie(): void {
		this.dvdPlayer.stop();

		this.tv.turnOff();
		this.soundSystem.turnOff();
		this.dvdPlayer.turnOff();
	}
}
