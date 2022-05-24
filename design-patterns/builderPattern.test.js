

const { User, UserBuilder} = require("./builderPattern")


describe('Builder pattern tests', () => {
    

    // it('first test', () => {
    //     expect(new UserBuilder('majeed').build()).toEqual( new User('majeed'));
    // });

    // it('set age test', () => {
    //     const user = new UserBuilder('john').setAge(35).build()
    //     expect(user.age).toEqual(35);
    // });

    it('check user age ', () => {
        const user = new User('john', { age : 25})
        expect(user.age).toBe(25);
    });

    it('check user address ', () => {
        const user = new User('john', { age: 25 })
        expect(user.address).toBe("");
    });
});