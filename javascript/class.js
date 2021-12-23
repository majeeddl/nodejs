

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
}


let myCar = new Car("Audi","C3")