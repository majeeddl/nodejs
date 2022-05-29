




// class Paypal{
//     makePayment(user,amount){

//     }
// }

class Store{
    constructor(paymentProcessor){
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(quantity){
        return this.paymentProcessor.pay(200 * quantity);
    }

    purchaseHemlet(quantity){
        return this.paymentProcessor.pay(15 * quantity);
    }
}

class StripPaymentProcessor{
    constructor(user){
        this.stripe = new Stripe(user);
    }

    pay(amount){
        return this.stripe.makePayment(amount * 100)
    }
}

class Stripe {
    constructor(user) {
        this.user = user;
    }

    makePayment(amount) {
        return {
            state : true,
            amount : amount
        }
    }
}

export {
    Store,
    StripPaymentProcessor
}