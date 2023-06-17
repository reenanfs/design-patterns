export class Pizza {
	public size: string | null = null;
	public toppings: string[] | null = null;
	public crustType: string | null = null;
	public sauce: string | null = null;
	public cheese: string | null = null;

	describe(): string {
		const description: string[] = [];
		description.push(`This is a ${this.size} pizza.`);

		for (const [name, value] of Object.entries(this)) {
			if (value && name !== 'size') {
				let formattedName = name[0].toUpperCase() + name.substring(1);
				let formattedValue: string;
				if (Array.isArray(value)) {
					formattedValue = value.join(', ');
				} else {
					formattedValue = value.toString();
				}
				description.push(`${formattedName}: ${formattedValue}`);
			}
		}

		return description.join('\n');
	}
}

export class PizzaBuilder {
	private REQUIRED_PROPERTIES: any = {
		size: 'The size of the pizza should be set',
	};

	private _pizza: Pizza;

	constructor() {
		this._pizza = new Pizza();
	}

	setSize(size: string): PizzaBuilder {
		this._pizza.size = size;
		return this;
	}

	addToppings(toppings: string[]): PizzaBuilder {
		this._pizza.toppings = toppings;
		return this;
	}

	setCrustType(crustType: string): PizzaBuilder {
		this._pizza.crustType = crustType;
		return this;
	}

	setSauce(sauce: string): PizzaBuilder {
		this._pizza.sauce = sauce;
		return this;
	}

	setCheese(cheese: string): PizzaBuilder {
		this._pizza.cheese = cheese;
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
