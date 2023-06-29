import { SortStrategy } from './strategy';

export class BubbleSortStrategy<T> implements SortStrategy<T> {
	sort(data: T[]): T[] {
		const n = data.length;

		for (let i = 0; i < n - 1; i++) {
			for (let j = 0; j < n - 1 - i; j++) {
				if (data[j] > data[j + 1]) {
					[data[j], data[j + 1]] = [data[j + 1], data[j]];
				}
			}
		}

		return data;
	}
}

export class SelectionSortStrategy<T> implements SortStrategy<T> {
	sort(data: T[]): T[] {
		const n = data.length;

		for (let i = 0; i < n - 1; i++) {
			let minIndex = i;

			for (let j = i + 1; j < n; j++) {
				if (data[j] < data[minIndex]) {
					minIndex = j;
				}
			}

			if (minIndex !== i) {
				[data[i], data[minIndex]] = [data[minIndex], data[i]];
			}
		}
		return data;
	}
}
