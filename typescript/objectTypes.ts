

//Extending Types
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
 
interface AddressWithUnit extends BasicAddress {
  unit: string;
}

//
interface Colorful {
  color: string;
}
 
interface Circle {
  radius: number;
}
 
interface ColorfulCircle extends Colorful, Circle {}
 
const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};

/*

Intersection Types

interfaces allowed us to build up new types from other types by extending them.
TypeScript provides another construct called intersection types that is mainly used to combine existing object types.

*/
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle2 = Colorful & Circle;


/*

Interfaces vs. Intersections
    We just looked at two ways to combine types which are similar,
    but are actually subtly different. With interfaces, 
    we could use an extends clause to extend from other types, and we were able to do something similar with intersections and name the result with a type alias.
    The principle difference between the two is how conflicts are handled,
      and that difference is typically one of the main reasons why you’d pick one over the other between an interface and a type alias of an intersection type.
*/


//array type
interface IArray<Type> {
  /**
   * Gets or sets the length of the array.
   */
  length: number;
 
  /**
   * Removes the last element from an array and returns it.
   */
  pop(): Type | undefined;
 
  /**
   * Appends new elements to an array, and returns the new length of the array.
   */
  push(...items: Type[]): number;
 
  // ...
}

//The ReadonlyArray Type
function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);
 
}


//  *** Index Signatures ***
interface StringArray{
  [index:number]:string
}
//const myArray: StringArray = getStringArray();
//const secondItem = myArray[1];
//An index signature property type must be either ‘string’ or ‘number’.

/*
However, properties of different types are acceptable if the index signature is a union of the property types:
*/

interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}

/*
Finally, you can make index signatures readonly in order to prevent assignment to their indices:
*/
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
/*let myArray: ReadonlyStringArray = getReadOnlyStringArray();
myArray[2] = "Mallory";
Index signature in type 'ReadonlyStringArray' only permits reading.
*/



/*
Intersection Types

interfaces allowed us to build up new types from other types by extending them.
TypeScript provides another construct called intersection types that is mainly used to combine existing object types.

An intersection type is defined using the & operator.
*/

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircleIntersection = Colorful & Circle;

function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}
 
// okay
draw({ color: "blue", radius: 42 });
 
// oops
//draw({ color: "red", raidus: 42 });

///************************************************* */

/*
Interfaces vs. Intersections
We just looked at two ways to combine types which are similar,
but are actually subtly different. With interfaces, we could use an extends clause to extend from other types, and we were able to do something similar with intersections and name the result with a type alias. The principle difference between the two is how conflicts are handled, and that difference is typically one of the main reasons why you’d pick one over the other between an interface and a type alias of an intersection type.