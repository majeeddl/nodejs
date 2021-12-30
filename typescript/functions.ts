

//Function Type Expressions

type GreetFunction = (a:string)=> void

const newGreatFunction = (fn:GreetFunction)=>{

}


//Call Signatures
type DescriableFunction = {
    decription:string;
    (someArg:number): number
}

const doSomething = (fn:DescriableFunction)=>{
    console.log(fn.decription + "returned" + fn(6))
}

//Construct Signatures
type SomeConstructor = {
  new (s: string): any;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}


//Generic Functions
const firstElement = <Type>(arr: any[]) : Type | undefined=>{
    return arr[0]
}

//Constraints
const longest = <Type extends { length : number}>(a:Type,b:Type)=>{
    if(a.length>= b.length){
        return a
    }else{
        return b
    }
}


//Push Type Parameters Down
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}
 
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}
 
// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);
/*
These might seem identical at first glance, but firstElement1 is a much better way to write this function.
 Its inferred return type is Type,
  but firstElement2’s inferred return type is any because TypeScript has to resolve the arr[0] expression using the constraint type,
  rather than “waiting” to resolve the element during a call.
  */


  //Use Fewer Type Parameters
//GOOD
  const filter1 = <Type>(arr: Type[], func: (arg: Type) => boolean) : Type[]=>{
    return arr.filter(func)
  }
//BAD
  const filter2 = <Type, Func extends (arg:Type)=>boolean>(arr: Type[],func: Func) : Type[]=>{
    return arr.filter(func)
  }
/*
We’ve created a type parameter Func that doesn’t relate two values. 
That’s always a red flag, because it means callers wanting to specify type arguments have to manually specify an extra type argument for no reason. 
Func doesn’t do anything but make the function harder to read and reason about!

Rule: Always use as few type parameters as possible
*/




//Specifying Type Arguments
const combine = <Type>(arr1: Type[], arr2: Type[]): Type[] =>{
  return arr1.concat(arr2);
}

/*
Guidelines for Writing Good Generic Functions
    Push Type Parameters Down
    Use Fewer Type Parameters
    Type Parameters Should Appear Twice
*/

//Optional Parameters in Callbacks//

const myForEach = (arr: any[], callback: (arg: any, index?: number) => void) =>{
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

//Function Overloads
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

/* OTHER TYPES */

//unknown
//The unknown type represents any value. This is similar to the any type, but is safer because it’s not legal to do anything with an unknown value:
/*
function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  a.b();
  Object is of type 'unknown'.
}
*/

//NEVER
//The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
//never also appears when TypeScript determines there’s nothing left in a union.
/*
function fail(msg: string): never {
  throw new Error(msg);
}
*/

//TypeScript Rest Parameters
const getTotal = (...numbers:number[])=>{
  let total = 0;
  numbers.forEach((num)=>{
    total += num
  })
  return total
}

console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60


//Rest Arguments
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
//Note that in general, TypeScript does not assume that arrays are immutable. This can lead to some surprising beha
// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers

/*
/// Inferred type is number[] -- "an array with zero or more numbers",
/// not specifically two numbers
const args = [8, 5];
const angle = Math.atan2(...args);
A spread argument must either have a tuple type or be passed to a rest parameter.
*/
