import { printQuiz, questions } from "./openClose";


describe('Open Close priciple - SOLID Pattern', () => {
    it('test 1', () => {
        expect(printQuiz(questions)).toBe(undefined);
    });
});