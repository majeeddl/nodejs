
//JavaScript Objects

/*


In JavaScript, objects are king. If you understand objects, you understand JavaScript.

In JavaScript, almost "everything" is an object.

    Booleans can be objects (if defined with the new keyword)
    Numbers can be objects (if defined with the new keyword)
    Strings can be objects (if defined with the new keyword)
    Dates are always objects
    Maths are always objects
    Regular expressions are always objects
    Arrays are always objects
    Functions are always objects
    Objects are always objects
    All JavaScript values, except primitives, are objects.


JavaScript Primitives
    A primitive value is a value that has no properties or methods.

    A primitive data type is data that has a primitive value.

JavaScript defines 5 types of primitive data types:

    string
    number
    boolean
    null
    undefined
 
Primitive values are immutable (they are hardcoded and therefore cannot be changed).


*/


let person = "John Doe";


let person = { 
    firstName : 'John',
    lastName:"Doe",
    age:50,
    fullName : ()=>{
        return ` ${this.firstName} ${this.lastName}`
    }
}

//A JavaScript object is a collection of named values
//firstName => Property
// 'John' => Value

//Object Methods
// fullName

//JavaScript objects are containers for named values, called properties and methods.


/*

Creating a JavaScript Object

With JavaScript, you can define and create your own objects.

There are different ways to create new objects:

    Create a single object, using an object literal.
    Create a single object, with the keyword new.
    Define an object constructor, and then create objects of the constructed type.
    Create an object using Object.create().
*/

//Using an Object Literal : This is a easiest way to create a JavasScript Object

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//Using the JavaScript Keyword new
const person_2 = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


/* 
JavaScript Objects are Mutable
Objects are mutable: They are addressed by reference, not by value.

If person is an object, the following statement will not create a copy of person:
*/

const x = person;  // Will not create a copy of person.
//The object x is not a copy of person. It is person. Both x and person are the same object.
//Any changes to x will also change person, because x and person are the same object.


/* JavaScript Accessors (Getters and Setters) */

const person_3 = {
    firstName : "John",
    lastName : "Doe",
    language : 'en',
    get lang(){
        return this.language
    },
    set lang(lang){
        this.language = lang
    }
}

console.log(person_3.lang)
person.lang = "de";

/*
Why Using Getters and Setters?
    It gives simpler syntax
    It allows equal syntax for properties and methods
    It can secure better data quality
    It is useful for doing things behind-the-scenes
*/

//Object.defineProperty()
const obj = {counter : 0};

Object.defineProperty(obj,'reset',{
    get : ()=>{
         this.counter = 0
    },
    set : (value)=>{
        this.counter -= value
    }
})


/* JavaScript Object Constructors */

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;

  this.name = function() {
    return this.firstName + " " + this.lastName;
  };

  this.changeName = function (name) {
    this.lastName = name;
  };
}

/*
Object Types (Blueprints) (Classes)

The examples from the previous chapters are limited. They only create single objects.
Sometimes we need a "blueprint" for creating many objects of the same "type".
The way to create an "object type", is to use an 

        Object Constructor Function.

In the example above, function Person() is an object constructor function.
Objects of the same type are created by calling the constructor function with the new keyword:

*/

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

/*
Built-in JavaScript Constructors

new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object
*/


/*
JavaScript Object Prototypes
*/

//Using the prototype Property

// object constructor function
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

// property
Person.prototype.nationality = "English"

// method
Person.prototype.name = ()=>{
    return this.firstName + ' ' + this.lastName
}


//JavaScript Iterables
//Objects that can be iterated over with for..of are called iterable.
//Technically, iterables must implement the Symbol.iterator method.


/* 

JavaScript Iterators

    The iterator protocol defines how to produce a sequence of values from an object.

    An object becomes an iterator when it implements a next() method.

    The next() method must return an object with two properties:

        value (the next value)
        done (true or false)
*/

//Home Made Iterable
function myNumbers() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value:n, done:false};
    }
  };
}

// Create Iterable
const n = myNumbers();
n.next(); // Returns 10
n.next(); // Returns 20
n.next(); // Returns 30


//A JavaScript iterable is an object that has a Symbol.iterator.
//The Symbol.iterator is a function that returns a next() function.

myNumbers = {

}

myNumbers[Symbol.iterator] = ()=>{
  let n=0;
  done = false;
  return {
    next(){
      n+=10;
      if(n==0){
        done =true
      }
      return {
        value : n,
        done : done
      }
    }
  }
}

for (const num of myNumbers) {
  // Any Code Here
}