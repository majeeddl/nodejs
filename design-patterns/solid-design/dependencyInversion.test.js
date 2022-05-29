import { Store, StripPaymentProcessor } from "./dependencyInversion";


describe('Dependency Inversion Tests', () => {
    it('test one', () => {

        const store = new Store(new StripPaymentProcessor('majeed'));
        const purchaseBikeResult = store.purchaseBike(1);
        expect(purchaseBikeResult).toEqual({ "amount": 20000, "state": true });

        const purchaseHelmetResult = store.purchaseHemlet(2);
        expect(purchaseHelmetResult).toEqual({ "amount": 3000, "state": true });
    });
});