import { BaseNotifier } from './component';
import { TypescriptTimerDecorator } from './typescript-decorator';

export class Notifier implements BaseNotifier {
	@TypescriptTimerDecorator()
	async send(message: string) {
		await new Promise<void>(resolve => {
			setTimeout(() => {
				console.log(`Sending base notification: ${message}`);
				resolve();
			}, 1000);
		});
	}
}
