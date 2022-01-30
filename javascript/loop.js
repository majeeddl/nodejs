

/* 
Javascript Loops

    Different Kinds of Loops
    JavaScript supports different kinds of loops:

        for - loops through a block of code a number of times
        for/in - loops through the properties of an object
        for/of - loops through the values of an iterable object
        while - loops through a block of code while a specified condition is true
        do/while - also loops through a block of code while a specified condition is true
*/

const cars = [ 'volvo' , "benz" , " BMW"]


for( let i =0 , text = "" ; i<cars.length ;i++){
    console.log(cars[i])

    text += cars[i] + "<br>";
}

//Statement 3
//Often statement 3 increments the value of the initial variable.
//This is not always the case, JavaScript doesn't care, and statement 3 is optional.


let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5



/* 
The For In Loop
The JavaScript for in statement loops through the properties of an Object
*/

const person = {fname:"John", lname:"Doe", age:25};

for (let key in person) {
    console.log(person[key])
}

/*

For In Over Arrays
    The JavaScript for in statement can also loop over the properties of an Array:

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

Do not use for in over an Array if the index order is important.
The index order is implementation-dependent, and array values may not be accessed in the order you expect.
It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
*/

/*

Array.forEach()
    The forEach() method calls a function (a callback function) once for each array element.

    const numbers = [45, 4, 9, 16, 25];

    let txt = "";
    numbers.forEach(myFunction);

    function myFunction(value, index, array) {
      txt += value;
    }

*/


/*
The For Of Loop
    The JavaScript for of statement loops through the values of an iterable object.
    It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more

Syntax
    for (variable of iterable) {
      // code block to be executed
    }
    variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

    iterable - An object that has iterable properties.

 */


//Looping over an Array

const cars2 = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + ",";
}

//result = BMW,Volvo,Mini


//Looping over a String

let language = "JavaScript";

let text = "";
for (let x of language) {
text += x;
}


/*

If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.

while (condition) {
  // code block to be executed
}

do {
  // code block to be executed
}
while (condition);


*/

while (i < 10) {
  text += "The number is " + i;
  i++;
}

do {
  text += "The number is " + i;
  i++;
} while (i < 10);


const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}


const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

// BMW;
// Volvo;
// Mini;


//If you have read the previous chapter, about the for loop, you will discover that a while loop is much the same as a for loop, with statement 1 and statement 3 omitted.
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

for (; cars[i]; ) {
  text += cars[i];
  i++;
}