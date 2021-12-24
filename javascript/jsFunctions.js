


/*

The Difference Between call() and apply()
The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array.

*/

const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);

person.fullName.call(person1, "Oslo", "Norway");


//JavaScript Closures

/*
JavaScript variables can belong to the local or global scope.
Global variables can be made local (private) with closures.

Global Variables
    A function can access all variables defined inside the function, like this:
*/

function myFunction() {
  let a = 4;
  return a * a;
}


/*

JavaScript Closures

*/

//JavaScript Nested Functions
function add(){
  let counter = 0;
  function plus(){
    counter += 1
  }
  plus();
  return counter
}

//JavaScript Closures
//Remember self-invoking functions? What does this function do?
const add = (()=>{
    let counter = 0;
    return ()=>{ counter += 1; return counter}
})();

add();
add();
add();

// the counter is now 3 
/*
Example Explained
  The variable add is assigned to the return value of a self-invoking function.
  The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
  This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
  This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
  The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
  A closure is a function having access to the parent scope, even after the parent function has closed.

*/