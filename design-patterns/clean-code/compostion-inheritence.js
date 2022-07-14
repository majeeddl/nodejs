

// With inheritence you're describing exactly what objects are and how they are related to each other.
// But in Composition you're describing what an object can do

class Monster{

}

const swimmer = ({name})=>{
    return  {
        swim :() => `${name} is swimming`

    }
}

const flyer = ({ name }) => {
    return {
        fly: () => `${name} is flying`

    }
}


const swimmingMonsterCreator = (name)=>{
    const monster = { name : name};

    return  {
        ...monster,
        ...swimmer(monster),
        ...flyer(monster)
    }
}


module.exports = {
    swimmingMonsterCreator
}