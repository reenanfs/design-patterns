
import { OldPaymentSystem } from "./adaptee";
import { PaymentProcessor } from "./target";

export class PaymentAdapter implements PaymentProcessor {
    private oldSystem: OldPaymentSystem;

    constructor(oldSystem: OldPaymentSystem) {
        this.oldSystem = oldSystem;
    }

    makePayment(amount: number): string {
        return this.oldSystem.processPayment(amount);
    }
}