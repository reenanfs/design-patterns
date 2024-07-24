export interface PaymentProcessor {
    makePayment(amount: number): string;
}