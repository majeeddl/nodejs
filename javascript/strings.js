

/* Strings /*


// Note : Do not create String objects , The "new" keyword complicates the code and slows down execution speed


/* Strings Methods */

//length
let txt = "hello";
let length = txt.length;

/* 
slice()
    if parameter is negative, the position is counted from the end of the string.
 */
let str = "Apple, Banana, Kiwi";
let slice = str.slice(7, 13);
let sliceReverse = str.slice(-12, -6)

/* 
substring()
    substring is similar to slice , but the difference is that "substring()" CAN NOT ACCEPT NEGATIVE INDEXES
*/
let substring = str.substring(7, 13)


/* 
substr()
    substr is similar to slice, but the difference is that the second parameter specified the LENGTH of the extracted part.

    @deprecated — A legacy feature for browser compatibility
*/
let substr = str.substr(7, 6)


/* 
replace()
    This method does not change the string it is called on. It returns NEW string.
    By default, the replace() method replaces only the first match;
    By default, the replace() method is case sensitive  ==> to replace case insensitive , use Regular Expression with an flag /i flag
*/

let text = "Please visit Microsoft and Microsoft!";
let getReplaceText = text.replace("Microsoft", "Tesla")
// to replace all matches, use a regular expression with a /g
let replaceAll = text.replace(/Microsoft/g, "Tesla")


// toUpperCase()

// toLowerCase()

/*
concat()

*/
let text1 = "Hello";
let text2 = "World";
let concatText = text1.concat(" ", text2)


/* 
trim()
    The trim() method removes whitespaces from both sides of a string
*/
let text3 = "    Hello World     ";
let trimString = text3.trim() 



/*
indexOf()
    This method returns the index of (the position of) the "first" occurrence of specified text in a string

lastIndexOf()
    The lastIndexOf() methods searches backwards (from the end to the beginning),
    meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

search()
    Did you notice :
        * The "search()" method cannot take a second start position argument
        * The "indexOf()" method cannot take powerful search values (regular expressions)
*/
let text4 = "Please locate where 'locate' occurs!";
let indexOf = text4.indexOf("locate");
let lastIndexOf = text4.lastIndexOf("locate");



module.exports = {
    slice,
    sliceReverse,
    substring,
    getReplaceText,
    replaceAll,
    concatText,
    trimString,
    indexOf,
    lastIndexOf
}
