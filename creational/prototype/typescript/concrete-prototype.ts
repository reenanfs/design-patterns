import { EnemyPrototype } from './prototype';

export class Zombie implements EnemyPrototype {
	public health: number;
	public attackPower: number;
	public speed: number;

	constructor(health: number, attackPower: number, speed: number) {
		this.health = health;
		this.attackPower = attackPower;
		this.speed = speed;
	}

	public clone(): EnemyPrototype {
		return Object.create(this);
	}

	public displayInfo(): void {
		console.log(
			`Zombie - Health: ${this.health}, Attack Power: ${this.attackPower}, Speed: ${this.speed}`
		);
	}
}

export class Vampire implements EnemyPrototype {
	public health: number;
	public attackPower: number;
	public speed: number;

	constructor(health: number, attackPower: number, speed: number) {
		this.health = health;
		this.attackPower = attackPower;
		this.speed = speed;
	}

	public clone(): EnemyPrototype {
		return Object.create(this);
	}

	public displayInfo(): void {
		console.log(
			`Vampire - Health: ${this.health}, Attack Power: ${this.attackPower}, Speed: ${this.speed}`
		);
	}
}

export class EnemyFactory {
	private prototypes: { [key: string]: EnemyPrototype } = {};

	public registerPrototype(name: string, prototype: EnemyPrototype): void {
		this.prototypes[name] = prototype;
	}

	public createEnemy(name: string): EnemyPrototype | null {
		const prototype = this.prototypes[name];
		if (prototype) {
			return prototype.clone();
		}
		return null;
	}
}
