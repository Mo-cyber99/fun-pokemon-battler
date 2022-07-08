const {
    Pokemon,
    FirePokemon,
    GrassPokemon,
    WaterPokemon,
    Charmander,
    Squirtle,
    Bulbasaur,
    Rattata,
    Pokeball,
} = require('../pokeball/pokeball');

class Trainer{
    constructor(name, ball1, ball2, ball3, ball4, ball5, ball6) {
        this.name = name;
        this.pokebelt = [ball1, ball2, ball3, ball4, ball5, ball6];
    }
   
    catch (pokemon) {
        for(let i = 0; i < this.pokebelt.length; i++)
            if (this.pokebelt[i].contains.pokemon === undefined) {
                this.pokebelt[i].throw(pokemon);
        } return `You have no empty Pokeballs!`
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
    Pokeball,
    Trainer,
}