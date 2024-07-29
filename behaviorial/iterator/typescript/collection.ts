import { Iterator } from './interface';

export interface Collection<T> {
	createIterator(): Iterator<T>;
}
