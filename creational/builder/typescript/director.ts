import { PizzaBuilder } from './builder';
import { Pizza } from './product';

export class PizzaDirector {
	constructor(private _builder: PizzaBuilder) {}

	setBuilder(builder: PizzaBuilder) {
		this._builder = builder;
	}

	constructPizza(size: string): Pizza {
		this._builder.setSize(size);
		this._builder.addToppings();
		this._builder.setCrustType();
		this._builder.setSauce();
		this._builder.setCheese();
		return this._builder.build();
	}
}
