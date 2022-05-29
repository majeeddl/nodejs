

//The main idea of the Liskov substitution principle is that :
// any function/module that interacts with a class should also be able to interact with all subclasses of that class without breaking

// class Shape {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     setWidth(width) {
//         this.width = width;
//     }

//     setHeight(height) {
//         this.height = height;
//     }

//     area() {
//         return this.width * this.height;
//     }
// }

// class Rectangle extends Shape {
//     constructor(){
//         super();
//     }
// }

// class Squre extends Shape {
//     constructor(){
//         super();
//     }
// }

class Bird {
    
    // action() {
    //     console.log(this instanceof)
    // }
}

class FlyingBird{
    fly(){
        return 'flying';
    }
}

class SwimingBird{
    swim(){
        return 'swimming';
    }
}

class Duck extends FlyingBird{
    constructor(){
        super();
    }
}

class Penguin extends SwimingBird{
    constructor(){
        super();
    }
}

export {
    Duck,
    Penguin,
}

