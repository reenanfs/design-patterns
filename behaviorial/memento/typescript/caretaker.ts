import { GameState } from './memento';

export class SaveHistory {
	private savedStates: GameState[] = [];

	save(state: GameState): void {
		this.savedStates.push(state);
	}

	restore(index: number): GameState | null {
		if (index >= 0 && index < this.savedStates.length) {
			return this.savedStates[index];
		}
		return null;
	}
}
