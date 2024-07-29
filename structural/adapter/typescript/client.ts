import { PaymentAdapter } from "./adapter";
import { OldPaymentSystem } from "./adaptee";
import { PaymentProcessor } from "./target";


class ECommerceApplication {
    private processor: PaymentProcessor;

    constructor(processor: PaymentProcessor) {
        this.processor = processor;
    }

    checkout(amount: number): void {
        const result = this.processor.makePayment(amount);
        console.log(`ECommerce Application: ${result}`);
    }
}

const oldSystem = new OldPaymentSystem();
const adapter = new PaymentAdapter(oldSystem);
const ecommerceApp = new ECommerceApplication(adapter);

ecommerceApp.checkout(100.0);
export { PaymentProcessor };

