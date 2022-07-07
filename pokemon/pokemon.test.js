const {
    Charmander,
    Squirtle,
    Bulbasaur,
    Rattata,
} = require('./pokemon');

describe('Charmander', () => {
    const charmander = new Charmander("Charmander", 44, 17);
        test('should create a new object with name, hitPoints, AttackDamage and move changed', () => {
            expect(charmander.name).toBe("Charmander")
            expect(charmander.type).toBe("fire")
            expect(charmander.hitPoints).toBe(44)
            expect(charmander.attackDamage).toBe(17)
            expect(charmander.move).toBe("Flamethrower")
        })
    })
    describe('Squirtle', () => {
    const squirtle = new Squirtle("Squirtle", 44, 16);
        test('should create a new object with name, hitPoints, AttackDamage and move changed', () => {
            expect(squirtle.name).toBe("Squirtle")
            expect(squirtle.type).toBe("water")
            expect(squirtle.hitPoints).toBe(44)
            expect(squirtle.attackDamage).toBe(16)
            expect(squirtle.move).toBe("Surf")
        })
    })
    
    describe('Bulbasaur', () => {
    const bulbasaur = new Bulbasaur("Bulbasaur", 45, 16);
        test('should create a new object with name, hitPoints, AttackDamage and move changed', () => {
            expect(bulbasaur.name).toBe("Bulbasaur")
            expect(bulbasaur.type).toBe("grass")
            expect(bulbasaur.hitPoints).toBe(45)
            expect(bulbasaur.attackDamage).toBe(16)
            expect(bulbasaur.move).toBe("Razor Leaf")
        })
    })
    
    describe('Rattata', () => {
    const rattata = new Rattata("Rattata", 30, 12);
        test('should create a new object with name, hitPoints, AttackDamage and move changed', () => {
            expect(rattata.name).toBe("Rattata")
            expect(rattata.type).toBe("normal")
            expect(rattata.hitPoints).toBe(30)
            expect(rattata.attackDamage).toBe(12)
            expect(rattata.move).toBe("Tackle")
        })
    })