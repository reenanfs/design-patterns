import { Pizza } from './product';

export interface PizzaBuilder {
	setSize: (size: string) => this;
	addToppings: () => this;
	setCrustType: () => this;
	setSauce: () => this;
	setCheese: () => this;
	build: () => Pizza;
}
