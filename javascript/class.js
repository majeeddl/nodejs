

/*

JavaScript Class Syntax
    Use the keyword class to create a class.
    Always add a method named constructor():
    A JavaScript class is not an object.
    It is a template for JavaScript objects.

*/

class Car {
    constructor(name,model) {
        this.name = name;
        this.model = model
    }

    getModel(){
        return this.model
    }

    present() {
    return 'I have a ' + this.name;
    }
}


let myCar = new Car("Audi","C3")


// class inheritance
//To create a class inheritance, use the extends keyword.
//A class created with a class inheritance inherits all the methods from another class:
class Model extends Car {
    constructor(name,mod){
        super(name)
        this.mod = mod
    }
    show(){
        return this.present() + ', it is a ' + this.model
    }
}

//The super() method refers to the parent class.
//By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
//Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.



/*Getter and Setter

The name of the getter/setter method cannot be the same as the name of the property, in this case carname.
Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:

Note: even if the getter is a method, you do not use parentheses when you want to get the property value.
*/
class Car {
    constructor(brand){
        this._carname = brand
    }

    get cname(x){
        return this._carname;
    }

    set cname(x){
        this._cname = x
    }

    static hello(){
        return "Hello!"
    }
}

let myCar = new Car("Ford")

console.log(myCar.cname)

//