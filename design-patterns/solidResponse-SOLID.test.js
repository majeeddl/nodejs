import CalorieTracker from "./SolidResponse-SOLID.js";


describe('Test Solid Response', () => {
    it('check 1', () => {
        const calorieTracker = new CalorieTracker(2000);
        calorieTracker.trackCalories(100)
        expect(calorieTracker.getCalorie()).toBe(100);
    });
});