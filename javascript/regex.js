

/*
JavaScript Regular Expressions

    In JavaScript, regular expressions are often used with the two string methods: search() and replace().

    The search() method uses an expression to search for a match, and returns the position of the match.
    The replace() method returns a modified string where the pattern is replaced.

Use String replace() With a Regular Expression.Did You Notice?
    Regular expression arguments (instead of string arguments) can be used in the methods above.
    Regular expressions can make your search much more powerful (case insensitive for example). 


Regular Expression Modifiers
    Modifier	Description	
    i	        Perform case-insensitive matching	
    g	        Perform a global match (find all matches rather than stopping after the first match)	
    m	        Perform multiline matching

*/

//Regular Expression Patterns

//[abc]	Find any of the characters between the brackets
let text = "Is this all there is?";
let regexOne = text.match(/[h]/g)

//[0-9]	Find any of the digits between the brackets
text = "123456789";
let regexTwo = text.match(/[1-4]/g)

//(x|y)	Find any of the alternatives separated with |
text =  "re, green, red, green, gren, gr, blue, yellow";
let regexThree = text.match(/(red|green)/g)


/*
Metacharacters are characters with a special meaning:
/*

module.exports = {
    regexOne,
    regexTwo,
    regexThree
}