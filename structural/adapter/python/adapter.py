
from structural.adapter.python.adaptee import OldPaymentSystem
from structural.adapter.python.target import PaymentProcessor


class PaymentAdapter(PaymentProcessor):
    def __init__(self, old_system: OldPaymentSystem) -> None:
        self._old_system = old_system

    def make_payment(self, amount: float) -> str:
        return self._old_system.process_payment(amount)