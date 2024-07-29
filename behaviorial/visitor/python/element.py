from abc import ABC, abstractmethod

from visitor import DocumentVisitor


class Document(ABC):
    @abstractmethod
    def accept(self, visitor: DocumentVisitor):
        pass
