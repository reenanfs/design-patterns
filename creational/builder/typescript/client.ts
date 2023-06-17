import { PizzaBuilder } from './builder';
import { PizzaDirector } from './director';

// Building method 1
const pizza = new PizzaBuilder()
	.setSize('Small')
	.addToppings(['Pepperoni', 'Onions'])
	.setCrustType('Thin')
	.setCheese('Mozzarella')
	.setSauce('Tomato')
	.build();

// Building method 2
const builder = new PizzaBuilder();

const pizza2 = builder
	.setSize('Large')
	.addToppings(['Onions'])
	.setCrustType('Thin')
	.setCheese('Mozzarella')
	.setSauce('Tomato')
	.build();

const pizza3 = builder
	.setSize('Big')
	.addToppings(['Pepperoni', 'Onions'])
	.setCrustType('Thin')
	.setCheese('Mozzarella')
	.setSauce('Tomato')
	.build();

// Building method 3

const director = new PizzaDirector(builder);

const pizza4 = director.createMargheritaPizza('small');
const pizza5 = director.createMargheritaPizza('large');

// Printing pizzas

console.log('======= 1 =======');
console.log(pizza.describe());
console.log('======= 2 =======');
console.log(pizza2.describe());
console.log(pizza3.describe());
console.log('======= 3 =======');
console.log(pizza4.describe());
console.log(pizza5.describe());
