

const message = "Hello World"

console.log(message);


/*

Understanding Type Annotations

The following are primitive types in TypeScript:

    number
    bigint
    string
    boolean
    null
    undefined
    symbol
*/

let firstName:string = "majeed";

let counter:number = 12;

let state :boolean = true;

let arrayString : string[] = ['John','Doe']

let array : number[] = [1,2,3];

let person: {
    name : string,
    age : number
}
person = {
    name : "majeed",
    age : 35
}

//Fuction arguments & return types
let greeting : (name:string)=>string;
greeting =  (name: string) =>{
    return `Hi ${name}`;
};


let anyType :any;

//TypeScript Tuple type
let tuple:[string,number] = ["Hello",120]


/*
Enums 
What is an enum
    An enum is a group of named constant values. Enum stands for enumerated type.

    To define an enum, you follow these steps:
        First, use the enum keyword followed by the name of the enum.
        Then, define constant values for the enum.

*/
enum season {
    spring,
    summer,
    autumn,
    winter
}


//TypeScript void type
const voidFunction = (message):void =>{
    console.log(message);
}

//TypeScript never Type
//Typically, you use the never type to represent the return type of a function that always throws an error
const raiseError = (message:string):never=>{
    throw new Error(message);
}

//TypeScript union Type
const addFunction = (a:any,b:any) : string| number =>{
     if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}