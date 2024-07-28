import { Context } from './context';
import { Expression } from './abstract-expression';

export class Add extends Expression {
	private left: Expression;
	private right: Expression;

	constructor(left: Expression, right: Expression) {
		super();
		this.left = left;
		this.right = right;
	}

	interpret(context: Context): number {
		return this.left.interpret(context) + this.right.interpret(context);
	}
}

export class Multiply extends Expression {
	private left: Expression;
	private right: Expression;

	constructor(left: Expression, right: Expression) {
		super();
		this.left = left;
		this.right = right;
	}

	interpret(context: Context): number {
		return this.left.interpret(context) * this.right.interpret(context);
	}
}
