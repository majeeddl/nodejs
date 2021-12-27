

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