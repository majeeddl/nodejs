


class User {
    constructor(id,name){
        this.id = id;
        this.name = name;
    }


    hasAccess(){
        return this.name === 'majeed';
    }
}

const users = [
    new User(1,'majeed'),
    new User(2,'john')
]

const getUser = (id)=>{
    return users.find(user => user.id === id)
}

const printUser = (id)=>{
    console.log(`The username is : ${getUser(id).name}`)
}