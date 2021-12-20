

/*
toFixed()
    This method returns a "string", with the number written with a specified number of decimals;
    Note : toFixed(2) is perfect for working with money
*/
let a = 9.656;
const checkToFixedMethod = a.toFixed(2)


/*
toPrecision()
    This method returns a string, with a number written with a specified length
*/
let b = 9.659;
const checkToPrecisionMethod = b.toPrecision(2)


/*
Number()	Returns a number, converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	Parses its argument and returns an integer
*/

module.exports = {
    checkToFixedMethod,
    checkToPrecisionMethod
}