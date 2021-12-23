

/*

JavaScript Errors - Throw and Try to Catch

    The try statement lets you test a block of code for errors.
    The catch statement lets you handle the error.
    The throw statement lets you create custom errors.
    The finally statement lets you execute code, after try and catch, regardless of the result.


Errors Will Happen!
    When executing JavaScript code, different errors can occur.
    Errors can be coding errors made by the programmer,
    errors due to wrong input, 
    and other unforeseeable things.


JavaScript try and catch
    The try statement allows you to define a block of code to be tested for errors while it is being executed.
    The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
    The JavaScript statements try and catch come in pairs:

    try{
        Block of code to try
    }
    catch(err){
        Block of code to handle erros
    }

JavaScript Throws Errors
    When an error occurs, JavaScript will normally stop and generate an error message.
    The technical term for this is: JavaScript will throw an exception (throw an error).
    JavaScript will actually create an Error object with two properties: 
        name and message


The throw Statement
    The throw statement allows you to create a custom error.
    Technically you can throw an exception (throw an error).
    The exception can be a JavaScript 
        String, a Number, a Boolean or an Object


The finally Statement
    The finally statement lets you execute code, after try and catch, regardless of the result.

    try {
        Block of code to try
    }
    catch(err) {
        Block of code to handle errors
    }
    finally {
        Block of code to be executed regardless of the try / catch result
    }


Error Name Values
    Six different values can be returned by the error name property:

    Error Name	    Description
    EvalError	    An error has occurred in the eval() function
    RangeError	    A number "out of range" has occurred
    ReferenceError	An illegal reference has occurred
    SyntaxError	    A syntax error has occurred
    TypeError	    A type error has occurred
    URIError	    An error in encodeURI() has occurred    => URI (Uniform Resource Identifier) Error


    */