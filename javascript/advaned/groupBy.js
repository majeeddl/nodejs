


// reduce

const numbers = [15.5, 2.3, 1.1, 4.7];

const getSum = (total,num)=>{
    return total+Math.round(num)
}

const resultReduce = numbers.reduce(getSum,0)


//Group

const cars = [{
make: "audi",
model: "r8",
year: "2012"
},
{
make: "audi",
model: "rs5",
year: "2013"
},
{
make: "ford",
model: "mustang",
year: "2012"
},
{
make: "ford",
model: "fusion",
year: "2015"
},
{
make: "kia",
model: "optima",
year: "2012"
}];

let group = cars.reduce((a,b)=>{
    // console.log(a)
    // console.log(b)
    // console.log([...a[b.make] || [],a])
    a[b.make] = [...a[b.make] || [],b]
    return a
},{})

const groupByResult = group

module.exports = {
    resultReduce,
    groupByResult
}