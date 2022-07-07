const {
    Pokemon,
} = require('./pokemon-class')

describe('Pokemon', () => {
    const charmander = new Pokemon("Charmander", 44, 17)
    test('should return type of "normal" by default', () => {
        expect(charmander.type).toBe("normal");
    })
    test('should return hitpoints passed as an argument', () => {
        expect(charmander.hitPoints).toBe(44);
    })
    test('should return attackDamage', () => {
        expect(charmander.attackDamage).toBe(17);
    })
    test('should return move initialised as "Tackle" by default', () => {
        expect(charmander.move).toBe('Tackle');
    })
})

describe('isEffectiveAgainst', () => {
    const testRun = new Pokemon();
    test('isEffectiveAgainst returns a boolean', () => {
        expect(typeof testRun.isEffectiveAgainst()).toBe('boolean');
    })
    test('should return false when invoked with the default type "normal"', () => {
        expect(testRun.isEffectiveAgainst()).toBe(false);
    })
})

describe('isWeakTo', () => {
    const testRun = new Pokemon();
    test('should return a boolean', () => {
        expect(typeof testRun.isWeakTo()).toBe('boolean');
    })
    test('should return false when invoked with nothing which is the default type "normal"', () => {
        expect(testRun.isWeakTo()).toBe(false);
    })
})

describe('takeDamage', () => {
    const charmander = new Pokemon("Charmander", 44, 17);
    test('should return the new hitpoints after removing damage', () => {
        expect(charmander.takeDamage(20)).toBe(24);
    })
})

describe('useMove', () => {
    const rattata = new Pokemon("Rattata", 50, 10);
    test('should return a number', () => {
        expect(typeof rattata.useMove(rattata)).toBe('number');
    })
    test('should return the attackDamage', () => {
        expect(rattata.useMove(rattata)).toBe(10);
    })
});

describe('hasFainted', () => {
    const rattata = new Pokemon("Rattata", 0, 10);
    test('returns a boolean', () => {
        expect(typeof rattata.hasfainted(rattata)).toBe('boolean')
    })
    test('should return true if hitPoints are at 0', () => {
        expect(rattata.hasfainted(rattata)).toBe(true);
    })
})