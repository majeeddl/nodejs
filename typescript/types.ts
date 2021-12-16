
//Basics

let a: string = "Hello"

let b: number = 12;

let c: boolean = true

let d: Array<number> = [1, 2, 3];;

let e: number[] = [20, 30];

let f: any = "Hello World";

//Functions
// Parameter type and return type for functions
const sampleFunction = (param: number): number => {
    return param + 10
}

// The parameter's type annotation is an object type
const functionTwo = (arg: { x: number, y: number }): number => {
    return arg.x + arg.y
}

//Union Types
let g: string | number = 12;


export {
    sampleFunction,
    functionTwo
}