

from xml.dom.minidom import Document

from visitor import DocumentVisitor


class Report(Document):
    def generate_content(self):
        print("Generating report...")

    def accept(self, visitor: DocumentVisitor):
        visitor.visit_report(self)


class Invoice(Document):
    def generate_content(self):
        print("Creating invoice...")

    def accept(self, visitor: DocumentVisitor):
        visitor.visit_invoice(self)


class Resume(Document):
    def generate_content(self):
        print("Preparing resume...")

    def accept(self, visitor: DocumentVisitor):
        visitor.visit_resume(self)
