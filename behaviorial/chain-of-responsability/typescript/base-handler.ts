import { Handler } from './interface';

export abstract class BaseHandler implements Handler {
	private nextHandler: Handler | null = null;

	public setNext(handler: Handler): Handler {
		this.nextHandler = handler;
		return handler;
	}

	public handle(request: string): string | null {
		if (this.nextHandler) {
			return this.nextHandler.handle(request);
		}
		return null;
	}
}
