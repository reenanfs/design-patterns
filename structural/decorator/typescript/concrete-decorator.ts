import { NotifierDecorator } from './decorator';

export class NotifierTimerDecorator extends NotifierDecorator {
	async send(message: string) {
		const startTime = new Date().getTime();
		await super.send(message);
		const endTime = new Date().getTime();
		const elapsedTime = endTime - startTime;
		console.log(
			`[Design Pattern Decorator] Time taken to send notification: ${elapsedTime} milliseconds`
		);
	}
}
