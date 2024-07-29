import {
	ConcreteHandler1,
	ConcreteHandler2,
	ConcreteHandler3,
} from './concrete-handler';

const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
const handler3 = new ConcreteHandler3();

handler1.setNext(handler2).setNext(handler3);

const requests = ['Request1', 'Request2', 'Request3', 'UnknownRequest'];

for (const request of requests) {
	const result = handler1.handle(request);
	if (result) {
		console.log(result);
	} else {
		console.log(`No handler could process the request: ${request}`);
	}
}
