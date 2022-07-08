const {
    Trainer,
    Pokeball,
    Charmander,
    Bulbasaur,
    Squirtle,
    Rattata,
} = require('./trainer');

describe('Trainer', () => {
    test('should take a name as a parameter and apply it', () => {
        const testTrainer = new Trainer('Ash');
        expect(testTrainer.name).toBe('Ash');
    })
    test('should take ball1 as a parameter and apply it to the Pokebelt', () => {
        const testTrainer = new Trainer('Ash', new Pokeball);
        expect(testTrainer.pokebelt[0].contains).toEqual({"pokemon": undefined});
    })
    test('should take seven parameters, name and six balls to complete the Pokebelt', () => {
        const testTrainer = new Trainer('Ash', new Pokeball, new Pokeball, new Pokeball, new Pokeball, new Pokeball, new Pokeball);
        expect(testTrainer.pokebelt[0].contains).toEqual({"pokemon": undefined});
        expect(testTrainer.pokebelt[1].contains).toEqual({"pokemon": undefined});
        expect(testTrainer.pokebelt[2].contains).toEqual({"pokemon": undefined});
        expect(testTrainer.pokebelt[3].contains).toEqual({"pokemon": undefined});
        expect(testTrainer.pokebelt[4].contains).toEqual({"pokemon": undefined});
        expect(testTrainer.pokebelt[5].contains).toEqual({"pokemon": undefined});
    })
})

describe('catch', () => {
    const testTrainer = new Trainer('Ash', new Pokeball, new Pokeball, new Pokeball, new Pokeball, new Pokeball, new Pokeball);
    test('when invoked with throw() will assign the caught pokemon to the next empty pokeball', () => {
        const testTrainer = new Trainer('Ash', new Pokeball, new Pokeball, new Pokeball, new Pokeball, new Pokeball, new Pokeball);
        testTrainer.catch(Charmander); 
        expect(testTrainer.pokebelt[0].contains.pokemon.name).toBe("Charmander");
    })
    test('should return a message if no Pokeballs are empty', () => {
        const testTrainer = new Trainer('Ash', new Pokeball(Charmander), new Pokeball(Bulbasaur), new Pokeball(Squirtle), new Pokeball(Rattata), new Pokeball(Charmander), new Pokeball(Squirtle));
        expect(testTrainer.catch(Charmander)).toBe("You have no empty Pokeballs!")
    })
})