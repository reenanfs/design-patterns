import { PizzaBuilder } from './builder';
import { Pizza } from './product';

export class MargheritaPizzaBuilder implements PizzaBuilder {
	private REQUIRED_PROPERTIES: { size: string } = {
		size: 'The size of the pizza should be set',
	};

	private _pizza: Pizza;

	constructor() {
		this._pizza = new Pizza();
	}

	setSize(size: string) {
		this._pizza.size = size;
		return this;
	}

	addToppings() {
		this._pizza.toppings = ['tomatoes', 'basil'];
		return this;
	}

	setCrustType() {
		this._pizza.crustType = 'thin';
		return this;
	}

	setSauce() {
		this._pizza.sauce = 'tomato';
		return this;
	}

	setCheese() {
		this._pizza.cheese = 'mozzarella';
		return this;
	}

	build(): Pizza {
		const missingProperties = Object.keys(this.REQUIRED_PROPERTIES).filter(
			propName => !this._pizza[propName as keyof Pizza]
		);

		if (missingProperties.length > 0) {
			throw new Error(
				`Required properties are missing: ${missingProperties.join(', ')}`
			);
		}
		const pizza = this._pizza;
		this._pizza = new Pizza();
		return pizza;
	}
}

export class PepperoniPizzaBuilder implements PizzaBuilder {
	private REQUIRED_PROPERTIES: { size: string } = {
		size: 'The size of the pizza should be set',
	};

	private _pizza: Pizza;

	constructor() {
		this._pizza = new Pizza();
	}

	setSize(size: string) {
		this._pizza.size = size;
		return this;
	}

	addToppings() {
		this._pizza.toppings = ['pepperoni'];
		return this;
	}

	setCrustType() {
		this._pizza.crustType = 'thin';
		return this;
	}

	setSauce() {
		this._pizza.sauce = 'tomato';
		return this;
	}

	setCheese() {
		this._pizza.cheese = 'cheddar';
		return this;
	}

	build(): Pizza {
		const missingProperties = Object.keys(this.REQUIRED_PROPERTIES).filter(
			propName => !this._pizza[propName as keyof Pizza]
		);

		if (missingProperties.length > 0) {
			throw new Error(
				`Required properties are missing: ${missingProperties.join(', ')}`
			);
		}
		const pizza = this._pizza;
		this._pizza = new Pizza();
		return pizza;
	}
}
