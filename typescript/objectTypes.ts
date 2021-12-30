

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

