const {
    Charmander,
    Squirtle,
    Bulbasaur,
    Rattata,
} = require('../pokemon/pokemon');

class Pokeball {
    constructor(pokemon) {
        this.contains = {pokemon};
    }

    throw (pokemon) {
        if (this.contains.pokemon === undefined) {
            this.contains = {pokemon};
                if (this.contains.pokemon !== undefined) {
                    return console.log(`you caught a ${pokemon.name}!`);
                }
            return console.log(`your Pokeball is empty!`);
        }        
        if (this.contains.pokemon !== undefined) {
        return console.log(`GO ${this.contains.pokemon.name}!!`)
        }
    }

    isEmpty () {
        if (this.contains.pokemon === undefined) {
            return true;
        }
        return false;
    }

    contain () {
        if (this.contains.pokemon !== undefined) {
            return this.contains.pokemon.name;
        }
        return `empty...`
    }
}

module.exports = {
    Pokeball,
    Charmander,
    Squirtle,
    Bulbasaur,
    Rattata,
    
}