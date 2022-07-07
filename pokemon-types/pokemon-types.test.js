const {
    FirePokemon,
    GrassPokemon,
    WaterPokemon,
} = require('./pokemon-types');

describe('FirePokemon', () => {
    const charmander = new FirePokemon();
    test('should overwrite "type" as "fire"', () => {
        expect(charmander.type).toBe("fire");
    })
    test('should overwrite isEffectiveAgainst to be strong against "grass" type', () => {
        expect(charmander.isEffectiveAgainst("grass")).toBe(true);
    })
    test('should overwrite isWeakTo to be weak against "water" type', () => {
        expect(charmander.isWeakTo("water")).toBe(true);
    })
})

describe('GrassPokemon', () => {
    const bulbasaur = new GrassPokemon();
    test('should overwrite "type" as "grass"', () => {
        expect(bulbasaur.type).toBe("grass");
    })
    test('should overwrite isEffectiveAgainst to be strong against "water" type', () => {
        expect(bulbasaur.isEffectiveAgainst("water")).toBe(true);
    })
    test('should overwrite isWeakTo to be weak against "fire" type', () => {
        expect(bulbasaur.isWeakTo("fire")).toBe(true);
    })
});

describe('WaterPokemon', () => {
    const squirtle = new WaterPokemon();
    test('should overwrite "type" as "water"', () => {
        expect(squirtle.type).toBe("water");
    })
    test('should overwrite isEffectiveAgainst to be strong against "fire" type', () => {
        expect(squirtle.isEffectiveAgainst("fire")).toBe(true);
    })
    test('should overwrite isWeakTo to be weak against "grass" type', () => {
        expect(squirtle.isWeakTo("grass")).toBe(true);
    })
})