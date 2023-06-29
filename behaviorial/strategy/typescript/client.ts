import { BubbleSortStrategy, SelectionSortStrategy } from './concrete_dtrategy';
import { Sorter } from './context';

const data = [1, 5, 9, 8, 6];
const bubbleSortStrategy = new BubbleSortStrategy<number>();
const selectionSortStrategy = new SelectionSortStrategy<number>();

const sorter = new Sorter<number>(bubbleSortStrategy);
const bubbleSortedData = sorter.sort(data);
console.log(bubbleSortedData);

const data2 = [1, 5, 9, 8, 6];
sorter.setStrategy(selectionSortStrategy);
const selectionSortedData = sorter.sort(data2);
console.log(selectionSortedData);
