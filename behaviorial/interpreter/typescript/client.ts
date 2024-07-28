import { Context } from './context';
import { Add, Multiply } from './nonterminal-expression';
import { NumberExpression } from './terminal-expression';

const context = new Context();

const expression = new Multiply(
	new Add(new NumberExpression(5), new NumberExpression(3)),
	new NumberExpression(2)
);

const result = expression.interpret(context);
console.log(`Result: ${result}`);
