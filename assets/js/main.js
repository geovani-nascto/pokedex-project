// function convertPokemonTypesToHtml(pokemonTypes){
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`);
// }

const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 5;
const offset = 0;


function loadPokemonItems(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
    
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        '`).join('');
        pokemonList.innerHTML += newHtml;
    
        // const listItems = [];
        // for(let i = 0; i < pokemons.length; i++){
        //     const pokemon = pokemons[i];
        //     listItems.push(convertPokemonToHtml(pokemon));
        // }
    })
}

loadPokemonItems(offset, limit);
loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonItems(offset, limit);
})



// fetch(url)
//     .then((response) => response.json())
//     .then((jsonBody) => console.log(jsonBody))
//     .catch((error) => console.error(error))

//ou:
// fetch(url)
//     .then((response) => { //ou .then((response) => response.json())
//         return response.json();
//     })
//     .then(function(jsonBody) {
//         console.log(jsonBody);
//     })
//     .catch(function(error) {
//         console.error(error);
//     })
//     .finally(function() {
//         console.log('Requisição concluída!');
//     })