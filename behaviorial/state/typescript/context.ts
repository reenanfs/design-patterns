import { StoppedState } from './concrete-state';
import { State } from './interface';

export class AudioPlayer {
	private state: State;

	constructor() {
		this.state = new StoppedState(); // Initial state
	}

	setState(state: State): void {
		this.state = state;
	}

	play(): void {
		this.state.play(this);
	}

	pause(): void {
		this.state.pause(this);
	}

	stop(): void {
		this.state.stop(this);
	}
}
