
/* There are 3 ways to declare a Javascript variable
 Using var
 Using let 
 Using const
*/


/* 
 Declare var 
 */

// It's a good programming practice to declare all variables at the begining of script
var x = 5

// One statement , Many Variables
var person = "John Doe", carName = "Volvo", price = 200;

// A variable decalre without a value will have the value "undefined"
var carName; 

// Re-Declaring Javacript Variables
// If you re-declare a Javacript variable, it wi;; not lose its value
var carName = "Volvo"
var carName;
console.log(carName) // output is "Volvo"


/* 
Declare let 

Variables defined with "let" can not be redeclared;
Variables defined with "let" must be declare before use;
Variables defined with "let" have BLOCK SCOPE;

*/

let x = 12;

// block scope
{
    let x = 2
}




/*
 Decalre const 

Variables defined with "const" can not be redeclared;
Variables defined with "const" can not be REASSIGNED;
Variables defined with "const" have BLOCK SCOPE;

When to use Javacript const ?

    As a general rule , always declare a variable with "const" unless you know that the value will change

    Use const when you declare :
        * A new Array
        * A new Object
        * A new Function
        * A new RegExp

This kewword is a little misleading.

It does not define a constant value. It defines a "constant reference" to a value;


Because of this you can NOT :
    * Reassign a constant value
    * Reassign a constant array
    * Reassign a constant object
But you CAN
    * change the elements of "constant ARRAY"
    * change the properties of "constant OBJECT"


 */

const PI = 3.14  // const PI ; PI = 3.14;  This is incorrect



