

//First the original way of doing builder pattern which is still completely valid at Javascript


// class User {
//     constructor(name ,{}){
//         this.name = name;
//     }
// }


// class UserBuilder{
//     constructor(name){
//         this.user = new User(name);
//     }

//     setAge(age){
//         this.user.age = age;
//         return this;
//     }

//     setPhone(phone) {
//         this.user.phone = phone;
//         return this;
//     }

//     setAddress(Address) {
//         this.user.Address = Address;
//         return this;
//     }

//     build(){
//         return this.user
//     }
// }


//Second way

class User {
    constructor(name , { age , phone , address = ""} = {}){
        this.name = name;
        this.age= age;
        this.phone = phone;
        this.address = address
    }
}




module.exports = {
    User
}