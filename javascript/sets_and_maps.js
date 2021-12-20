


/*

JavaScript Sets
    A JavaScript Set is a collection of unique values.

    Each value can only occur once in a Set.

    Method	Description
        new Set()	Creates a new Set
        add()	Adds a new element to the Set
        delete()	Removes an element from a Set
        has()	Returns true if a value exists in the Set
        forEach()	Invokes a callback for each element in the Set
        values()	Returns an iterator with all the values in a Set
        Property	Description
        size	Returns the number of elements in a Set

*/

const letters = new Set(["a","b","c"]);

// Add Values to the Set
letters.add("d");
letters.add("e");
letters.add("f");

let text = "";
letters.forEach (function(value) {
  text += value;
})

letters.values()   // Returns [object Set Iterator]

//Now you can use the Iterator object to access the elements:
// List all Elements
let text = "";
for (const x of letters.values()) {
  text += x;
}


/*

JavaScript Maps
    A Map holds key-value pairs where the keys can be any datatype.
    A Map remembers the original insertion order of the keys.

    Essensial Map Methods
        Method	Description
        new Map()	Creates a new Map
        set()	Sets the value for a key in a Map
        get()	Gets the value for a key in a Map
        delete()	Removes a Map element specified by the key
        has()	Returns true if a key exists in a Map
        forEach()	Calls a function for each key/value pair in a Map
        entries()	Returns an iterator with the [key, value] pairs in a Map
        Property	Description
        size	Returns the number of elements in a Map
*/  

// Create a Map
let fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);


//or

// Create a Map
let fruits = new Map();
// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);


fruits.get("apples");    // Returns 500

fruits.delete("apples"); // delete apples from maps

fruits.has("apples"); // false


/*

JavaScript Objects vs Maps
Differences between JavaScript Objects and Maps:
                     Object	                             Map
    Iterable	Not directly iterable	            Directly iterable
    Size	    Do not have a size property	        Have a size property
    Key Types	Keys must be Strings (or Symbols)	Keys can be any datatype
    Key Order	Keys are not well ordered	        Keys are ordered by insertion
    Defaults	Have default keys	                Do not have default keys

*/


// List all entries
let text = "";
fruits.forEach ((value, key)=> {
  text += key + ' = ' + value;
})

//The entries() Method
//The entries() method returns an iterator object with the [key, values] in a Map:

// List all entries
let text = "";
for (const x of fruits.entries()) {
  text += x;
}
//text  => apples,500bananas,300oranges,200