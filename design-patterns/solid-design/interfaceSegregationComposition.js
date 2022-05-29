//component
const mover = {
    move() {
        // console.log(`${this.name} is moving`);
    }
}
//component
const attacker = {
    attack(targetEntity) {
        // console.log(`${this.name} is attacking ${targetEntity.name} for ${this.attackDamage} damage`);
        targetEntity.takeDamage(this.attackDamage);
    }
}
//component
const hasHealth = {
    takeDamage(amount) {
        this.health -= amount;
        // console.log(`${this.name} has ${this.health} health left`);
    }
}


class Entity {
    constructor(name) {
        this.name = name;
    }
}

class Character extends Entity {
    constructor(name, attackDamage, health) {
        super(name);
        this.attackDamage = attackDamage;
        this.health = health;
    }
}
// assign component to our class
Object.assign(Character.prototype, mover, attacker, hasHealth);


class Wall extends Entity {
    constructor(name, health) {
        super(name);
        this.health = health;
    }
}
// assign component to our class
Object.assign(Wall.prototype, hasHealth);


class Turret extends Entity {
    constructor(name, attackDamage) {
        super(name);
        this.attackDamage = attackDamage;
    }
}
// assign component to our class
Object.assign(Turret.prototype, attacker);

export {
    Character,
    Wall,
    Turret
}