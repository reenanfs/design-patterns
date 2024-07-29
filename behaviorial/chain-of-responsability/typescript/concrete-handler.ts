import { BaseHandler } from './base-handler';

export class ConcreteHandler1 extends BaseHandler {
	public handle(request: string): string | null {
		if (request === 'Request1') {
			return `ConcreteHandler1 handled the request: ${request}`;
		}
		return super.handle(request);
	}
}

export class ConcreteHandler2 extends BaseHandler {
	public handle(request: string): string | null {
		if (request === 'Request2') {
			return `ConcreteHandler2 handled the request: ${request}`;
		}
		return super.handle(request);
	}
}

export class ConcreteHandler3 extends BaseHandler {
	public handle(request: string): string | null {
		if (request === 'Request3') {
			return `ConcreteHandler3 handled the request: ${request}`;
		}
		return super.handle(request);
	}
}
