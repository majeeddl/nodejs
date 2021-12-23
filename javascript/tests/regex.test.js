const { regexOne, regexTwo, regexThree, regexFour, regexFive,regexSix, resultExec } = require("../regex");



test("check [abc] regex ", () => {
    expect(regexOne).toEqual(['h','h']);
})

test("check [0-9] regex ", () => {
    expect(regexTwo).toEqual(["1","2","3","4"]);
})


test("check (x|y) regex ", () => {
    expect(regexThree).toEqual(["green","red","green"]);
})


test("check /d regex ", () => {
    expect(regexFour).toEqual(["1","0","0"]);
})

test("check whitespae regex ", () => {
    expect(regexFive).toEqual([" "," "," "," "]);
})

test("search and find a match at the begining of word with regex ", () => {
    expect(regexSix).toEqual(7);
})

test("exec regex ", () => {
    expect(resultExec[0]).toEqual('e');
    expect(resultExec.index).toEqual(2);
})