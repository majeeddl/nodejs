const { resultReduce, groupByResult } = require("../advaned/groupBy")


beforeEach(()=>{

})

test("1. Test reduce function",()=>{
    expect(resultReduce).toBe(24)
})


test("2. Test group function",()=>{
    expect(groupByResult).toEqual({"audi": [{"make": "audi", "model": "r8", "year": "2012"}, {"make": "audi", "model": "rs5", "year": "2013"}], "ford": [{"make": "ford", "model": "mustang", "year": "2012"}, {"make": "ford", "model": "fusion", "year": "2015"}], "kia": [{"make": "kia", "model": "optima", "year": "2012"}]})
})