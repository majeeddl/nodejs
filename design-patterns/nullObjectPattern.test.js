
const { getUser } = require("./nullObjectPattern")

describe('Test Of NullObject Pattern', () => {
    it('print first user ', () => {
        expect(getUser(1).name).toBe('majeed');
    });

    it('check nullUser name ', () => {
        expect(getUser(3).name).toBe('guest');
    });

    it('check nullUser access ', () => {
        expect(getUser(3).hasAccess()).toBe(false);
    });
});