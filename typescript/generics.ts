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
