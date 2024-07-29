from concrete_element import Invoice, Report, Resume
from concrete_visitor import PrintVisitor, SaveToDatabaseVisitor


documents = [Report(), Invoice(), Resume()]

print_visitor = PrintVisitor()
save_to_db_visitor = SaveToDatabaseVisitor()


print("Applying PrintVisitor:")
for doc in documents:
    doc.accept(print_visitor)

print("\nApplying SaveToDatabaseVisitor:")
for doc in documents:
    doc.accept(save_to_db_visitor)
