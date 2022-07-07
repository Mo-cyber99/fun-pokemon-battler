const {
    Pokemon,
} = require('../pokemon-class/pokemon-class')

class FirePokemon extends Pokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints , attackDamage);
        this.type = "fire";
    }

    isEffectiveAgainst (type) {
        if (type === "grass") {
           return true;
        }  return false;
    }

    isWeakTo (type) {
        if (type === "water") {
            return true
        } return false;
    }
}

class GrassPokemon extends Pokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage);
        this.type = "grass";
    }

    isEffectiveAgainst (type) {
        if (type === "water") {
           return true;
        }  return false;
    }

    isWeakTo (type) {
        if (type === "fire") {
            return true
        } return false;
    }
}

class WaterPokemon extends Pokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage);
        this.type = "water";
    }

    isEffectiveAgainst (type) {
        if (type === "fire") {
           return true;
        }  return false;
    }

    isWeakTo (type) {
        if (type === "grass") {
            return true
        } return false;
    }
}

module.exports = {
    FirePokemon,
    GrassPokemon,
    WaterPokemon,
    Pokemon,
    
}