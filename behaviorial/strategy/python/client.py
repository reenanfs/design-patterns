from concrete_strategy import BubbleSortStragegy, SelectionSortStrategy
from context import Sorter

data = [1, 5, 9, 8, 6]

bubble_sort_stragegy = BubbleSortStragegy()
selection_sort_stragegy = SelectionSortStrategy()

sorter = Sorter(bubble_sort_stragegy)
bubble_sorted_data = sorter.sort(data)
print(bubble_sorted_data)

data2 = [1, 5, 9, 8, 6]
sorter.set_strategy(selection_sort_stragegy)
selection_sorted_data = sorter.sort(data2)
print(selection_sorted_data)
