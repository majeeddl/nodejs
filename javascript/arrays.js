
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



const numbers = [45, 4,9 ,16 ,25]
let txt = ""
numbers.forEach((value,index,array)=>{
    txt += value
})


/* 
splice( where, how many, ...)
*/

//TODO : splice
//Using splice() to Remove Elements
let removed = fruits.splice(2,2,"Lemon","kiwi") // fruits => Banana,Orange,Lemon,Kiwi            removed => Apple,Mango

let removed = fruits.splice(0,1) // fruits => Banana,Orange,Apple,Mango    removed =>  Orange,Apple,Mango

/*
The slice() method creates a new array.

The slice() method does not remove any elements from the source array.
*/
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1); //Orange,Lemon,Apple,Mango

const citrus = fruits.slice(3); // Apple,Mango

//The method then selects elements from the start argument, and up to (but not including) the end argument.
const citrus = fruits.slice(1, 3); //Orange,Lemon

//If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
const citrus = fruits.slice(2); //Lemon,Apple,Mango




const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();   // Apple,Banana,Mango,Orange


const fruits = ["Banana", "Orange", "Apple", "Mango"];
// First sort the array
fruits.sort();   // Banana,Orange,Apple,Mango
// Then reverse it:
fruits.reverse(); ///Orange,Mango,Banana,Apple


const points = [40, 100, 1, 5, 25, 10];
points.sort( (a, b)=> {
  return a - b;
});

const points = [40, 100, 1, 5, 25, 10];
points.sort( (a, b)=> {
  return b - a;
});

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

cars.sort( (a, b)=> {
  return a.year - b.year;
});

cars.sort( (a, b)=> {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});



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

The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
The reduceRight() works from right-to-left in the array. See also reduce().
*/
const numberForReduce =  [45, 4, 9, 16, 25];
let reduceFunction = (total, value, index, array)=>{
    return total + value;
}

let reduceResult = numberForReduce.reduce(reduceFunction)

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce((a,b)=>{
    return a+b
}, 100);

function myFunction(total, value) {
  return total + value;
}

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
*/


const numbers = [4, 9, 16, 25, 29];
let first = numbers.find((value,index,array)=>{
    return value > 18
});

//The findIndex() method returns the index of the first array element that passes a test function.
let findIndex = numbers.findIndex((value, index, array) => {
  return value > 18;
});


const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  console.log(x)
}
//0 1 2 3

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true



module.exports = {
    fruits,
    joinArray,
    resultMap,
    resultFilter,
    reduceResult,
    everyResult,
    someResult
}