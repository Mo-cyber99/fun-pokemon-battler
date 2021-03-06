class Pokemon {
    constructor (name, hitPoints, attackDamage) {
        this.name = name;
        this.type = "normal";
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.move = "Tackle";
    }

    isEffectiveAgainst () {
        return false;
    }

    isWeakTo () {
        return false;
    }

    takeDamage (attackersDamage) {
       this.hitPoints -= attackersDamage;
       if (this.hitPoints < 0) {
        return this.hitPoints = 0;
       }
       return this.hitPoints;
    }

    useMove (pokemon) {
        console.log(`${pokemon.name} used ${pokemon.move}`);
        return pokemon.attackDamage;        
    }

    hasfainted(pokemon) {
        if (pokemon.hitPoints === 0) {
            return true;
        }   return false;
    }
}

module.exports = {
    Pokemon,  
}