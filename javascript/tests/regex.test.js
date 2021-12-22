const { regexOne, regexTwo, regexThree } = require("../regex");



test("check [abc] regex ", () => {
    expect(regexOne).toEqual(['h','h']);
})

test("check [0-9] regex ", () => {
    expect(regexTwo).toEqual(["1","2","3","4"]);
})


test("check (x|y) regex ", () => {
    expect(regexThree).toEqual(["green","red","green"]);
})