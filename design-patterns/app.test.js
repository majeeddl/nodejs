
const app = require('./app')
describe('app test' ,()=>{


    beforeEach(() => {
        
    });

    it('sum test ', () => {
        expect(app.sum(1,2)).toBe(3);
    });
})