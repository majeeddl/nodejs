const { swimmingMonsterCreator } = require("./compostion-inheritence");



describe('Test Compisition vs inheritance', () => {
    it('first test', () => {
        const obj = swimmingMonsterCreator('Goblin');
        expect(obj.swim()).toBe("Goblin is swimming");
        expect(obj.fly()).toBe("Goblin is flying");
    });
});