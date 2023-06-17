import { Pizza, PizzaBuilder } from './builder';

export class PizzaDirector {
	constructor(private _builder: PizzaBuilder) {}

	createPepperoniPizza(size: string): Pizza {
		this._builder.setSize(size);
		this._builder.addToppings(['pepperoni']);
		this._builder.setCrustType('thin');
		this._builder.setSauce('tomato');
		this._builder.setCheese('mozzarella');
		return this._builder.build();
	}

	createMargheritaPizza(size: string): Pizza {
		this._builder.setSize(size);
		this._builder.addToppings(['tomatoes', 'basil']);
		this._builder.setCrustType('thin');
		this._builder.setSauce('tomato');
		this._builder.setCheese('mozzarella');
		return this._builder.build();
	}
}
