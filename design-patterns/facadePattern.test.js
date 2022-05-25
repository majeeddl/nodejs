
import {getFetch} from "./facadePattern"

describe('Facade Pattern Tests', () => {
    it('first test ', async () => {

        const getUsers = await getFetch('http://jsonplaceholder.typicode.com/users', {});
        console.log(getUsers.data.length)
        expect(getUsers.data.length).toBe(10);
    });
});