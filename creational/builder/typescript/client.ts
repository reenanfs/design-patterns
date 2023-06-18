import {
	MargheritaPizzaBuilder,
	PepperoniPizzaBuilder,
} from './concrete-builder';
import { PizzaDirector } from './director';

// Building method 1
const pizza = new MargheritaPizzaBuilder()
	.setSize('Small')
	.addToppings()
	.setCrustType()
	.setCheese()
	.setSauce()
	.build();

// Building method 2
const pepperoniBuilder = new PepperoniPizzaBuilder();

const pizza2 = pepperoniBuilder
	.setSize('Large')
	.addToppings()
	.setCrustType()
	.setCheese()
	.setSauce()
	.build();

const pizza3 = pepperoniBuilder
	.setSize('Big')
	.addToppings()
	.setCrustType()
	.setCheese()
	.setSauce()
	.build();

// Building method 3

const director = new PizzaDirector(pepperoniBuilder);

const pizza4 = director.constructPizza('small');

const margheritaPizzaBuilder = new MargheritaPizzaBuilder();

director.setBuilder(margheritaPizzaBuilder);

const pizza5 = director.constructPizza('large');

// Printing pizzas

console.log('======= 1 =======');
console.log(pizza.describe());
console.log('======= 2 =======');
console.log(pizza2.describe());
console.log(pizza3.describe());
console.log('======= 3 =======');
console.log(pizza4.describe());
console.log(pizza5.describe());
