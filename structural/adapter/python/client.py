

from adapter import PaymentAdapter
from structural.adapter.python.adaptee import OldPaymentSystem
from structural.adapter.python.target import PaymentProcessor


class ECommerceApplication:
    def __init__(self, processor: PaymentProcessor) -> None:
        self._processor = processor

    def checkout(self, amount: float) -> None:
        result = self._processor.make_payment(amount)
        print(f"ECommerce Application: {result}")


old_system = OldPaymentSystem()
adapter = PaymentAdapter(old_system)
ecommerce_app = ECommerceApplication(adapter)

ecommerce_app.checkout(100.0)
