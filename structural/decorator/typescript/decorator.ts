import { BaseNotifier } from './component';

export class NotifierDecorator implements BaseNotifier {
	constructor(private notifier: BaseNotifier) {
		this.notifier = notifier;
	}

	async send(message: string) {
		await this.notifier.send(message);
	}
}
