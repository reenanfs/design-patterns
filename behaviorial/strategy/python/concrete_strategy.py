from strategy import SortStrategy


class BubbleSortStragegy(SortStrategy):
    def sort(self, data):
        n = len(data)
        for i in range(n - 1):
            for j in range(n - 1 - i):
                if data[j] > data[j + 1]:
                    data[j], data[j + 1] = data[j + 1], data[j]
        return data


class SelectionSortStrategy(SortStrategy):
    def sort(self, data):
        n = len(data)
        for i in range(n - 1):
            min_index = i
            for j in range(i + 1, n):
                if data[j] < data[min_index]:
                    min_index = j
            data[i], data[min_index] = data[min_index], data[i]

        return data
