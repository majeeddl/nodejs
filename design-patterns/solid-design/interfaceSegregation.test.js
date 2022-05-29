import { Character, Turret ,Wall} from "./interfaceSegregation";


describe('Interface Segregation Priciple', () => {
    it('test one', () => {

        const turret = new Turret('Turret',5);
        const character = new Character('Character',3,100);
        const wall = new Wall('Wall',200);

        turret.attack(character);
        character.move();
        character.attack(wall);
        
        expect(wall.health).toBe(197);
        expect(character.health).toBe(95);
    });
});