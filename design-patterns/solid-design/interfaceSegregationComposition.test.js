
import { Character, Turret, Wall } from "./interfaceSegregationComposition";


describe('Interface Segregation Priciple with compositions', () => {
    it('test one', () => {

        const turret = new Turret('Turret', 5);
        const character = new Character('Character', 3, 100);
        const wall = new Wall('Wall', 200);

        turret.attack(character);
        character.move();
        character.attack(wall);

        expect(wall.health).toBe(197);
        expect(character.health).toBe(95);
    });

    it('check throw error', () => {

        const turret = new Turret('Turret', 5);
        const wall = new Wall('Wall', 200);
        
        expect(()=>{
            turret.move()
        }).toThrow(TypeError);

        expect(() => {
            wall.move()
        }).toThrow(TypeError);
    });
});