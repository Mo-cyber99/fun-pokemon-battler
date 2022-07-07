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
        this.contains = {pokemon};
    }

    isEmpty () {

    }

    contains () {

    }
}

module.exports = {
    Pokeball,
    Charmander,
    Squirtle,
    Bulbasaur,
    Rattata,
    
}