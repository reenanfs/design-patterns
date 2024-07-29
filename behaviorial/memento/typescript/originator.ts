import { GameState } from './memento';

export class Game {
	level: number;
	health: number;

	constructor(level: number, health: number) {
		this.level = level;
		this.health = health;
	}

	save(): GameState {
		return new GameState(this.level, this.health);
	}

	restore(state: GameState): void {
		this.level = state.level;
		this.health = state.health;
	}

	display(): string {
		return `Level: ${this.level}, Health: ${this.health}`;
	}
}
