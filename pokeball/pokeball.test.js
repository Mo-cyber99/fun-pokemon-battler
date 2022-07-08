const {
    Pokeball,
    Charmander,
    Squirtle,
    Bulbasaur,
    Rattata,

} = require ('./pokeball');

describe('Pokeball', () => {
const testPokeball = new Pokeball(Charmander);
    test('"contains" should be an object', () => {
        expect(typeof testPokeball.contains).toBe("object")
    })
    test('should be able to store a pokemon passed as an argument', () => {
        expect(testPokeball.contains).toEqual({"pokemon": Charmander});
    })
})

describe('throw', () => {
    test('should take a Pokemon as an argument and add it to the "contains" key', () => {
        const testPokeball = new Pokeball();
        testPokeball.throw(Charmander);
        expect(testPokeball.contains).toEqual({"pokemon": Charmander});
    })
    test('should not capture the Pokemon if the Pokeball already contains one.', () => {
        const testPokeball = new Pokeball(Bulbasaur);
        testPokeball.throw(Charmander);
        expect(testPokeball.contains).toEqual({"pokemon": Bulbasaur});
    })
    test('should remain undefined if no Pokemon existed or was caught', () => {
        const testPokeball = new Pokeball();
        testPokeball.throw();
        expect(testPokeball.contains.pokemon).toBe(undefined);
    })
})

describe('isEmpty', () => {
let testPokeball = new Pokeball();
    test('should return a boolean', () => {
        expect(typeof testPokeball.isEmpty()).toBe('boolean');
    })
    test('should return true if there is no Pokemon in the Pokeball', () => {
        expect(testPokeball.isEmpty()).toBe(true);
    })
    test('should return false if there is a Pokemon in the Pokeball', () => {
        testPokeball = new Pokeball(Charmander);
        expect(testPokeball.isEmpty()).toBe(false);
    })
})

describe.only('contain', () => {
let testPokeball = new Pokeball(Charmander);
    test('should return the name of the pokemon that is stored', () => {
        expect(testPokeball.contain()).toBe("Charmander");
    })
    test('should return "...empty" if the Pokeball is empty', () => {
        testPokeball = new Pokeball();
        expect(testPokeball.contain()).toBe("empty...");
    })
})