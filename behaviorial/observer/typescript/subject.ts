import { Observer } from './observer';

export class User {
	constructor(public name: string, public email: string) {}
}

export enum EventTypes {
	USER_CREATED = 'user_created',
}

export interface Subject {
	addListener: (eventName: EventTypes, observer: Observer) => void;
	removeListener: (eventName: EventTypes, observer: Observer) => void;
	notify: (eventName: EventTypes, data: any) => void;
}
