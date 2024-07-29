from concrete import PDFReportGenerator, ExcelReportGenerator

if __name__ == "__main__":
    pdf_report = PDFReportGenerator()
    pdf_report.generate_report()

    print('---')

    excel_report = ExcelReportGenerator()
    excel_report.generate_report()
