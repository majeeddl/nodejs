const identity = <Type>(arg: Type): Type => {
  return arg;
};

const identityTwo = <Type>(arg: Type[]): Type[] => {
  console.log(arg.length);
  return arg;
};

let myIdentity: <Type>(arg: Type) => Type = identity;

let myIdentityTwo: <Input>(arg: Input) => Input = identity;

//We can also write the generic type as a call signature of an object literal type:

let myIdentityThree: { <Type>(arg: Type): Type } = identity;

//
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

const identityOne = <Type>(arg: Type): Type => {
  return arg;
};

let myIdentityFour: GenericIdentityFn<number> = identityOne;

/*   Generic Classes */

class GenericNumber<T> {
  zeroValueL: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValueL = 0
myGenericNumber.add = (a,b)=>{
    return a+b
}



//Conditional Types

type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
  message: string;
}

type EmailMessageContents = MessageOf<Email>;


/*
https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/
*/

//defining a generics
const getRandomElement = <T>(items: T[])=>{
   let randomIndex = Math.floor(Math.random()*items.length);
   return items[randomIndex];
}

//calling a generics
let numbers = [1,2,3,4,5]
let randomItem = getRandomElement<number>(numbers)

/*
Generic functions with multiple types

function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

*/


/*

generic constraints in TypeScript

function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

*/

/*
Using type parameters in generic constraints

function prop<T, K>(obj: T, key: K) {
    return obj[key];
}
====> Type 'K' cannot be used to index type 'T'.


function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}


*/

/*
Introduction to TypeScript generic classes

*/
class Stack<T> {
  private elements: T[] = [];

  constructor(private size: number) {}

  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  isFull(): boolean {
    return this.elements.length === this.size;
  }
  push(element: T): void {
    if (this.elements.length === this.size) {
      throw new Error("The stack is overflow!");
    }
    this.elements.push(element);
  }
  pop(): T {
    if (this.elements.length == 0) {
      throw new Error("The stack is empty!");
    }
    return this.elements.pop();
  }
}

let numbers2 = new Stack<number>(5);


/*
 TypeScript generic interfaces

*/

//1) Generic interfaces that describe object properties
interface Pair<K, V> {
  key: K;
  value: V;
}

let month: Pair<string, number> = {
  key: "Jan",
  value: 1,
};

console.log(month);

//2) Generic interfaces that describe methods
interface Collection<T> {
  add(o: T): void;
  remove(o: T): void;
}

class List<T> implements Collection<T> {
  private items: T[] = [];

  add(o: T): void {
    this.items.push(o);
  }
  remove(o: T): void {
    let index = this.items.indexOf(o);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}

//3) Generic interfaces that describe index types

interface Options<T> {
  [name: string]: T;
}

let inputOptions: Options<boolean> = {
  disabled: false,
  visible: true,
};

