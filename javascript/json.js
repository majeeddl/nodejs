

/*

JavaScript JSON

    JSON is a format for storing and transporting data  
    JSON is often used when data is sent from server to a web page

What is JSON?

    JSOn stands for JavaScript Object Notation
    JSON is a lightwight data interchange format
    JSON is language independent *
    JSON is "self-describing" and easy to understand


The JSON Format Evaluates to JavaScript Objects
    The JSON format is syntactically identical to the code for creating JavaScript objects.
    Because of this similarity, a JavaScript program can easily convert JSON data into native JavaScript objects.

JSON Syntax Rules
    Data is in name/value pairs
    Data is separated by commas
    Curly braces hold objects
    Square brackets hold arrays
*/


/*
JSON Objects
JSON objects are written inside curly braces.

Just like in JavaScript, objects can contain multiple name/value pairs:

*/
const jsonObject = {"firstName":"John", "lastName":"Doe"}


//Converting a JSON Text to a JavaScript Object
//Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:
let text = '{"firstName":"John", "lastName":"Doe"}'
const obj = JSON.parse(text);