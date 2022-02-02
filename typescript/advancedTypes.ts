
/*

TypeScript Intersection Types

type typeAB = typeA & typeB;

*/
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: number;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee2 = Identity & Contact;
type Customer = BusinessPartner & Contact;

//Type Order
//When you intersect types, the order of the types doesn’t matter


/*
TypeScript Type Guards

*/

//typeof
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  throw new Error(
    "Invalid arguments. Both arguments must be either numbers or strings."
  );
}


// instanceof
class Customer2 {
  isCreditAllowed(): boolean {
    // ...
    return true;
  }
}
class Supplier {
  isInShortList(): boolean {
    // ...
    return true;
  }
}

type BusinessPartner2 = Customer2 | Supplier;

function signContract(partner: BusinessPartner): string {
  let message: string;
  if (partner instanceof Customer2) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  }

  return message;
}

//in
//The in operator carries a safe check for the existence of a property on an object. You can also use it as a type guard
function signContract2(partner: BusinessPartner2): string {
  let message: string;
  if ("isCreditAllowed" in partner) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  }
  return message;
}


//User-defined Type Guards
function isCustomer(partner: any): partner is Customer2 {
  return partner instanceof Customer2;
}
function signContract3(partner: BusinessPartner2): string {
  let message: string;
  if (isCustomer(partner)) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  }

  return message;
}


/*

Type Casting

let a: typeA;
let b = a as typeB;


let a: typeA;
let b = <typeB>a;

*/





/*
Type Assertions

A type assertion is also known as type narrowing. It allows you to narrow a type from a union type.


*/
function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

let netPrice = getNetPrice(100, 0.05, true) as string;
console.log(netPrice);


//The alternative Type Assertion syntax
 let netPrice2 = <number>getNetPrice(100,2,false);