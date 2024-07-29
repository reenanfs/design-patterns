from abstract import ReportGenerator


class PDFReportGenerator(ReportGenerator):
    def collect_data(self):
        print("Collecting data for PDF report...")

    def process_data(self):
        print("Processing data for PDF report...")

    def format_data(self):
        print("Formatting data for PDF report as PDF...")


class ExcelReportGenerator(ReportGenerator):
    def collect_data(self):
        print("Collecting data for Excel report...")

    def process_data(self):
        print("Processing data for Excel report...")

    def format_data(self):
        print("Formatting data for Excel report as Excel...")
