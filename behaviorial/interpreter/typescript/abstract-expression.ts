import { Context } from './context';

export abstract class Expression {
	abstract interpret(context: Context): number;
}
