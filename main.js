async function gettingPokemonDataByNumber(numberIdPokemon = 1) {
    const responseFromApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${numberIdPokemon}`);
    const jsonResponseFromApi = await responseFromApi.json();
    return jsonResponseFromApi;
}

var pokemonSprite = document.querySelector(".sprite img");

gettingPokemonDataByNumber().then(x => pokemonSprite.src = x.sprites.front_default);