import { Observer } from './observer';
import { EventTypes, Subject } from './subject';

export class EventManager implements Subject {
	observers: Map<EventTypes, Set<Observer>> = new Map();

	addListener(eventName: EventTypes, observer: Observer) {
		const observers = this.observers.get(eventName) || new Set();
		observers.add(observer);
		this.observers.set(eventName, observers);
	}

	removeListener(eventName: EventTypes, observer: Observer) {
		const observers = this.observers.get(eventName);
		if (observers) {
			observers.delete(observer);
			if (observers.size === 0) {
				this.observers.delete(eventName);
			}
		}
	}

	notify(eventName: EventTypes, data: any) {
		const observers = this.observers.get(eventName);
		if (observers) {
			observers.forEach(observer => observer.update(data));
		}
	}
}
