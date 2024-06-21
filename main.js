var nextPokemonId = 1;
var nextPokemonIdIncrement;
var pokemonSprite = document.querySelector(".sprite img");
var buttonNext = document.querySelector(".button-next");

async function gettingPokemonDataByNumber(numberIdPokemon = 1) {
    const responseFromApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${numberIdPokemon}`);
    const jsonResponseFromApi = await responseFromApi.json();
    return jsonResponseFromApi;
}

function nextPokemon() {
    nextPokemonIdIncrement = nextPokemonId + 1;
    nextPokemonId = nextPokemonIdIncrement;
    gettingPokemonDataByNumber(nextPokemonId).then(x => pokemonSprite.src = x.sprites.front_default);
}

gettingPokemonDataByNumber().then(x => pokemonSprite.src = x.sprites.front_default);

buttonNext.addEventListener("click", nextPokemon);