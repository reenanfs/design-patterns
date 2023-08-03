import { EmailService, SlackService } from './concrete-observer';
import { EventManager } from './concrete-subject';
import { EventTypes, User } from './subject';

const eventManager = new EventManager();

const emailService = new EmailService();
const slackService = new SlackService();

eventManager.addListener(EventTypes.USER_CREATED, emailService);
eventManager.addListener(EventTypes.USER_CREATED, slackService);

const user1 = new User('User1', 'user1@email.com');
const user2 = new User('User2', 'user2@email.com');

eventManager.notify(EventTypes.USER_CREATED, user1);
eventManager.notify(EventTypes.USER_CREATED, user2);
