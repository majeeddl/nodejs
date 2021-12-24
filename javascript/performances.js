


// JavaScript Performance

/*
Reduce Activity in Loops
Loops are often used in programming.

Each statement in a loop, including the for statement, is executed for each iteration of the loop.

Statements or assignments that can be placed outside the loop will make the loop run faster.

*/


let arr = [ "apple" , "orange", "cherry"];

//Bad:
for (let i = 0; i < arr.length; i++) {}

//Better Code:
let l = arr.length;
for (let i = 0; i < l; i++) {}

//The bad code accesses the length property of an array each time the loop is iterated.
//The better code accesses the length property outside the loop and makes the loop run faster.