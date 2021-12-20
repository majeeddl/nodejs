const { checkToFixedMethod, checkToPrecisionMethod } = require("../numbers");

beforeEach(() => {

})

test("check toFixed ", () => {
    expect(checkToFixedMethod).toBe("9.66");
})

test("check toPrecision ", () => {
    expect(checkToPrecisionMethod).toBe("9.7");
})
