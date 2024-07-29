import { AudioPlayer } from './context';

export interface State {
	play(player: AudioPlayer): void;
	pause(player: AudioPlayer): void;
	stop(player: AudioPlayer): void;
}
