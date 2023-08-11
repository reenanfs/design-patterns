import { Observer } from './observer';
import { User } from './subject';

export class EmailService implements Observer {
	update(data: User) {
		this.sendEmail(data);
	}

	sendEmail(data: User) {
		const { name, email } = data;
		console.log(
			`Sending an email to ${name} at ${email}: Welcome to our platform!`
		);
	}
}

export class SlackService implements Observer {
	update(data: User) {
		this.sendSlack(data);
	}

	sendSlack(data: User) {
		const { name, email } = data;
		console.log(
			`Sending an slack message to ${name}: Welcome to our platform!`
		);
	}
}
