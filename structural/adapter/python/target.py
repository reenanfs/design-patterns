from abc import ABC, abstractmethod


class PaymentProcessor(ABC):
    @abstractmethod
    def make_payment(self, amount: float) -> str:
        pass
