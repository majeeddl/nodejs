
/*

JavaScript Use Strict

    "use strict"; Defines that JavaScript code should be executed in "strict mode".

The "use strict" Directive
    The "use strict" directive was new in ECMAScript version 5. 
    It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
    The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
    With strict mode, you can not, for example, use undeclared variables.



Why Strict Mode?
    Strict mode makes it easier to write "secure" JavaScript.
    Strict mode changes previously accepted "bad syntax" into real errors.
    As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
    In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
    In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.
*/

/* 

Using a variable, without declaring it, is not allowed:
"use strict";
 x = 3.14;                // This will cause an error

Using an object, without declaring it, is not allowed:
 "use strict";
x = {p1:10, p2:20};       // This will cause an error

//Deleting a variable (or object) is not allowed.
//Deleting a function is not allowed.
"use strict";
let x = 3.14;
delete x;                // This will cause an error

"use strict";
function x(p1, p2) {};
delete x;     

Duplicating a parameter name is not allowed:
"use strict";
function x(p1, p1) {};   // This will cause an error

Octal numeric literals are not allowed:
"use strict";
let x = "\010";            // This will cause an error


Writing to a read-only property is not allowed:
"use strict";
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});
obj.x = 3.14;            // This will cause an error

Deleting an undeletable property is not allowed:
"use strict";
delete Object.prototype; // This will cause an error

The word eval cannot be used as a variable:
"use strict";
let eval = 3.14;         // This will cause an error

The word arguments cannot be used as a variable:
"use strict";
let arguments = 3.14;    // This will cause an error

The with statement is not allowed:
"use strict";
with (Math){x = cos(2)}; // This will cause an error

For security reasons, eval() is not allowed to create variables in the scope from which it was called:
"use strict";
eval ("let x = 2");
alert (x);             // This will cause an error


*/


/*
The this keyword in functions behaves differently in strict mode.
The this keyword refers to the object that called the function.
If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):

"use strict";
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();


THIS

It has different values depending on where it is used:

    In a method, this refers to the owner object.
    Alone, this refers to the global object.
    In a function, this refers to the global object.
    In a function, in strict mode, this is undefined.
    In an event, this refers to the element that received the event.
    Methods like call(), and apply() can refer this to any object.

*/