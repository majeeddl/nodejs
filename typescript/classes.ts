// function Person(firstName,lastname){
//     this.firstName = firstName,
//     this.lastName = lastname
// }

// Person.prototype.getFullName = ()=>{
//     return `${this.firstname} ${this.lastname}`
// }

// let personOne:any = new Person("John", "Doe");
// console.log(personOne.getFullName());

class Person {
  firstName;
  lastName;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

//TypeScript Access Modifiers
//The private modifier limits the visibility to the same-class only
//The public modifier allows class properties and methods to be accessible from all locations
//The protected modifier allows properties and methods of a class to be accessible within same class and within subclasses.

/*  GETTER SETTER */

class Person2 {
  private _firstName: string;
  private _lastName: string;

  public get firstName() {
    return this._firstName;
  }

  public set firstName(firstname: string) {
    this._firstName = firstName;
  }

  public get lastName() {
    return this._lastName;
  }

  public set lastName(lastName: string) {
    this._lastName = lastName;
  }
}

/* TypeScript Inheritance */

class Employee extends Person {
  constructor(firstName: string, lastName: string, private job: string) {
    super(firstName, lastName);
  }

  //Method overriding
  describe(): string {
    return super.describe() + `I'm a ${this.job}`;
  }
}


/* TypeScript Static Methods and Properties */

class EmployeeTwo {
  static headcount: number = 0;

  constructor(
    private firstName: string,
    private lastName: string,
    private jobTitle: string
  ) {
    EmployeeTwo.headcount++;
  }

  public static getHeadcount() {
    return EmployeeTwo.headcount;
  }
}

let john = new EmployeeTwo('John', 'Doe', 'Front-end Developer');
let jane = new EmployeeTwo('Jane', 'Doe', 'Back-end Developer');

console.log(EmployeeTwo.headcount); // 2
console.log(EmployeeTwo.getHeadcount); // 2


/* TypeScript Abstract Classes */
/*

An abstract class is typically used to define common behaviors for derived classes to extend. Unlike a regular class, an abstract class cannot be instantiated directly.

The getSalary() method is an abstract method. The derived class will implement the logic based on the type of employee.

*/

abstract class EmployeeAbstract {
  constructor(private firstName: string, private lastName: string) {}
  abstract getSalary(): number;
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}

class FullTimeEmployee extends EmployeeAbstract {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }
  getSalary(): number {
    return this.salary;
  }
}

/*

Summary
Abstract classes cannot be instantiated.
An Abstract class has at least one abstract method.
To use an abstract class, you need to inherit it and provide the implementation for the abstract methods.

*/
