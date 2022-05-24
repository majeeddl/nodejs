


class User {
    constructor(id,name){
        this.id = id;
        this.name = name;
    }


    hasAccess(){
        return this.name === 'majeed';
    }
}

class NullUser{
    constructor() {
        this.id = -1;
        this.name = 'guest';
    }


    hasAccess() {
        return false
    }
}

const users = [
    new User(1,'majeed'),
    new User(2,'john')
]

const getUser = (id)=>{
    const user = users.find(user => user.id === id);
    if( user == null) {
        return new NullUser()
    }else{
        return user;
    }
}

const printUser = (id)=>{

    const user = getUser(id);
    // if(user != null && user.hasAccess != null && user.hasAccess()){
    if (user.hasAccess()) {
        console.log(`The user '${user.name}' has access`)
    }else{
        console.log("User does not have access")
    }
    
}

module.exports = {
    getUser,
    printUser
}