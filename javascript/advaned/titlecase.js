
function titleCase(str) {
  // let items = str.split(" ")

  // items[0] = `${ items[0][0].toUpperCase()}${ (items[0].slice(1,items[0].length)).toLowerCase()}`

  // let result = items.reduce((a,b)=> {
  //   b = `${ b[0].toUpperCase()}${b.slice(1,b.length).toLowerCase()}`
  //   return a + ' ' + b
  //   })

  //   console.log(result)
  return str.toLowerCase()
  .split(" ")
  .map( val => val.replace(val.charAt(0),val.charAt(0).toUpperCase()))
  .join(" ");
}

titleCase("I'm a little tea pot");


function frankenSplice(arr1, arr2, n) {
    let arr = arr2.slice()
    arr.splice(n,0,...arr1)  
  return arr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}


/*

Set the Child's Prototype to an Instance of the Parent
In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) Animal: making a new instance of Animal.

This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

Bird.prototype = Object.create(Animal.prototype);
Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal.

let duck = new Bird("Donald");
duck.eat();
duck inherits all of Animal's properties, including the eat method.
*/



//Understand the Immediately Invoked Function Expression (IIFE)
//
//A common pattern in JavaScript is to execute a function as soon as it is declared:

(function () {
  console.log("Chirp, chirp!");
})();