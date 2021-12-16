

// It is a common practice to declare objects with the "const" keyword

const car = { 
    type:"Fiat",
    model:"500",
    color:"white",
}


//object properties  -> objectName.propertyName  or objectName["propertyName"]
let type = car.type;
type = car["type"]


// The this keyword
// In a function definition, "this" refers to the "owner"
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName : ()=>{
        return `${this.firstName} ${this.lastName}`
    }
}


// NOTE : do not declare Strings, Numbers, and Booleans as Objects