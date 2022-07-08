const {
    FirePokemon,
    WaterPokemon,
    GrassPokemon,
    Pokemon,
} = require('../pokemon-types/pokemon-types')

class Charmander extends FirePokemon {
    constructor(name, hitPoints , attackDamage) {
        super(name, hitPoints , attackDamage);  
        this.move = "Flamethrower";      
    }
}

class Squirtle extends WaterPokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage);
        this.move = "Surf";
    }
}

class Bulbasaur extends GrassPokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage);
        this.move = "Razor Leaf";
    }
}

class Rattata extends Pokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage);
    }
}

module.exports = {
    Pokemon,
    FirePokemon,
    GrassPokemon,
    WaterPokemon,
    Charmander,
    Squirtle,
    Bulbasaur,
    Rattata,
}