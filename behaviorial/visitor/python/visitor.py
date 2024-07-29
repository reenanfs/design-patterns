from abc import ABC, abstractmethod


class DocumentVisitor(ABC):
    @abstractmethod
    def visit_report(self, report):
        pass

    @abstractmethod
    def visit_invoice(self, invoice):
        pass

    @abstractmethod
    def visit_resume(self, resume):
        pass
