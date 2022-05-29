import { Duck, Penguin } from "./liskov";


describe('Liskov Substitution Test', () => {
    it('test one', () => {
        const duck = new Duck();
        expect(duck.fly()).toBe('flying');
    });

    it('test two', () => {
        const penguin = new Penguin();
        expect(penguin.swim()).toBe('swimming');
    });
});