
/*
Arrays
    arrays use numbered indexes and objects use named indexes
/*

// It is common practice to declare arrays with "const" keyword
const cars = ["Saab","Volvo","BMW"];


/* 
push method
*/
const fruits = ["Banana", "Orange", "Apple"]
fruits.push("Lemon");


/*
How to recognize an Array
*/
Array.isArray(fruits) // true
fruits instanceof Array // true


/*  join */
const joinArray = fruits.join("*")


/* 
poping and pushing
    Popping items "out of" an array, or pushing items "into" an array.

shift and unshift
    The shift() method removes the first array element and "shifts" all other elements to a lower index.
    The unshift() method adds a new element to an array (at the beginning)
*/


/* 
splice( where, how many, ...)
*/

//TODO : splice
//Using splice() to Remove Elements


/* JS ARRAY ITERATION */

/*
map()
    The map() method creates a new array by performing a function on each array element.
    The map() method does not execute the function for array elements without values.
    The map() method does not change the original array.
*/
const numbers1 = [45, 4, 9, 16, 25];
const resultMap = numbers1.map((value, index, array) => {
    return value * 2
})

/* 
filter()
    The filter() method creates a new array with array elements that passes a test
*/
const resultFilter = numbers1.filter((value, index, array) => {
    return value > 18
})


/* 
reduce()
    The reduce() method runs a fucntion on each array element to produce (reduce it to) a single value
    The reduce() method works from left-to-right in the array.

reduceRight()
*/
const numberForReduce =  [45, 4, 9, 16, 25];
let reduceFunction = (total, value, index, array)=>{
    return total + value;
}

let reduceResult = numberForReduce.reduce(reduceFunction)


/* 
every()
    The every() method check if all array values pass a test.
*/

let everyFunc = (value, index, array)=>{
    return value > 18
}

let everyResult = numberForReduce.every(everyFunc)




/* 
some()
    The some() method check if some array values pass a test.
*/

let someFunc = (value, index, array)=>{
    return value > 18
}

let someResult = numberForReduce.some(everyFunc)


/*
The Array indexOf() Method
The Array lastIndexOf() Method
/*

module.exports = {
    fruits,
    joinArray,
    resultMap,
    resultFilter,
    reduceResult,
    everyResult,
    someResult
}