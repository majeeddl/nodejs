

const { slice , sliceReverse, getReplaceText, replaceAll, concatText, trimString, indexOf, lastIndexOf} = require("../strings")

beforeEach(()=>{

})


test("check string slice method",()=>{
    expect(slice).toBe("Banana")
    expect(sliceReverse).toBe("Banana")
})


test("chech replace method",()=>{
    expect(getReplaceText).toBe("Please visit Tesla and Microsoft!");
    expect(replaceAll).toBe("Please visit Tesla and Tesla!")
})

test("check concat method",()=>{
    expect(concatText).toBe("Hello World")
})

test("check trim method", () => {
    expect(trimString).toBe("Hello World")
})

test("check string search",()=>{
    expect(indexOf).toBe(7);
    expect(lastIndexOf).toBe(21)
})