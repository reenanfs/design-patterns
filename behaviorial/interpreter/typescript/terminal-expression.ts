import { Context } from './context';
import { Expression } from './abstract-expression';

export class NumberExpression extends Expression {
	private number: number;

	constructor(number: number) {
		super();
		this.number = number;
	}

	interpret(context: Context): number {
		return this.number;
	}
}
