

/*

Introduction to TypeScript modules

Since ES6, JavaScript started supporting modules as the native part of the language. TypeScript shares the same module concept with JavaScript.

A TypeScript module can contain both declarations and code. 
A module executes within its own scope, not in the global scope. 
It means that when you declare variables, functions, classes, interfaces, etc., in a module,
 they are not visible outside the module unless you explicitly export them using export statement.

*/

//Creating a new module
export interface Validator {
  isValid(s: string): boolean;
}

//Export statements
interface ValidatorAsStatement {
  isValid(s: string): boolean;
}

export { ValidatorAsStatement };
export { Validator as StringValidator };

//Default Exports
//TypeScript allows each module to have one default export. To mark an export as a default export, you use the default keyword.