import { SortStrategy } from './strategy';

export class Sorter<T> {
	constructor(private strategy: SortStrategy<T>) {}

	setStrategy(strategy: SortStrategy<T>) {
		this.strategy = strategy;
	}

	sort(data: T[]): T[] {
		this.strategy.sort(data);
		return data;
	}
}
