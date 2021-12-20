const { joinArray, resultMap, reduceResult, everyResult, someResult } = require("../arrays");

beforeEach(() => {

})

test("check joinArray ", () => {
    expect(joinArray).toBe("Banana*Orange*Apple*Lemon");
})

test("check map Array ", () => {
    expect(resultMap).toEqual([90, 8, 18, 32, 50]);
})


test("check reduce Array ", () => {
    expect(reduceResult).toEqual(99);
})

test("check every Array ", () => {
    expect(everyResult).toEqual(false);
})


test("check some Array ", () => {
    expect(someResult).toEqual(true);
})