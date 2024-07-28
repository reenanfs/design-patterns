from abc import ABC, abstractmethod


class ReportGenerator(ABC):
    def generate_report(self):
        self.collect_data()
        self.process_data()
        self.format_data()
        self.print_report()

    @abstractmethod
    def collect_data(self):
        pass

    @abstractmethod
    def process_data(self):
        pass

    @abstractmethod
    def format_data(self):
        pass

    def print_report(self):
        print("Printing report...")
