
const logger= require ("./singletonPattern");

describe('Singletone pattern tests', () => {
    
    beforeAll(()=>{
        logger.log('first logs')
    })

    it('check fancy logger ', () => {
        logger.log('second logs')
        expect(logger.numberLogs()).toBe(2);
    });
}); 