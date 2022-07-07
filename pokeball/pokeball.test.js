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
        console.log(testPokeball.contains);
        expect(testPokeball.contains).toEqual({"pokemon": Charmander});
    })
})

describe('throw', () => {
    const testPokeball = new Pokeball();
    const testThrow = testPokeball.throw(Charmander);
    test('should take a Pokemon as an argument and it to the "contains"', () => {
        expect(testPokeball.contains).toEqual({"pokemon": Charmander});
    })
})