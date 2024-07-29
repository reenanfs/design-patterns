from concrete_element import Invoice, Report, Resume
from visitor import DocumentVisitor


class PrintVisitor(DocumentVisitor):
    def visit_report(self, report: Report):
        report.generate_content()
        print("Printing report:")

    def visit_invoice(self, invoice: Invoice):
        invoice.generate_content()
        print("Printing invoice:")

    def visit_resume(self, resume: Resume):
        resume.generate_content()
        print("Printing resume:")


class SaveToDatabaseVisitor(DocumentVisitor):
    def visit_report(self, report: Report):
        report.generate_content()
        print("Saving report to database:")

    def visit_invoice(self, invoice: Invoice):
        invoice.generate_content()
        print("Saving invoice to database:")

    def visit_resume(self, resume: Resume):
        resume.generate_content()
        print("Saving resume to database:")
