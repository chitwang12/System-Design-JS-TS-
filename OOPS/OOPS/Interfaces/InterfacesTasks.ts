//Interface deifing the contract
interface PaymentGateway{
    processPayment(amount: number): void;
}


//Implementing the interface for Credit Card Payments
class CreditCardPayment implements PaymentGateway{
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
}


//Implementing the interface for UPI Payments
class UPIPayment implements PaymentGateway{
    processPayment(amount: number): void {
        console.log(`Processing UPI payment of $${amount}`);
    }
}


//Polymorphism in action

function processTransaction(payment: PaymentGateway, amount: number){
    payment.processPayment(amount);
}


//Usage 
const creditCardPayment = new CreditCardPayment();
const upiPayment = new UPIPayment();

processTransaction(creditCardPayment, 100); // Output: Processing credit card payment of $100
processTransaction(upiPayment, 200); // Output: Processing UPI payment of $200