import { BaseNotifier } from './component';
import { Notifier } from './concrete-component';
import { NotifierTimerDecorator } from './concrete-decorator';

let notifier: BaseNotifier = new Notifier();

notifier = new NotifierTimerDecorator(notifier);

notifier.send('Hello World!');
