import { AudioPlayer } from './context';
import { State } from './interface';

export class PlayingState implements State {
	play(player: AudioPlayer): void {
		console.log('Already playing.');
	}

	pause(player: AudioPlayer): void {
		console.log('Pausing the player.');
		player.setState(new PausedState());
	}

	stop(player: AudioPlayer): void {
		console.log('Stopping the player.');
		player.setState(new StoppedState());
	}
}

export class PausedState implements State {
	play(player: AudioPlayer): void {
		console.log('Resuming the player.');
		player.setState(new PlayingState());
	}

	pause(player: AudioPlayer): void {
		console.log('Already paused.');
	}

	stop(player: AudioPlayer): void {
		console.log('Stopping the player.');
		player.setState(new StoppedState());
	}
}

export class StoppedState implements State {
	play(player: AudioPlayer): void {
		console.log('Starting the player.');
		player.setState(new PlayingState());
	}

	pause(player: AudioPlayer): void {
		console.log('Cannot pause. Player is stopped.');
	}

	stop(player: AudioPlayer): void {
		console.log('Already stopped.');
	}
}
