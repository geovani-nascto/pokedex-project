// function convertPokemonTypesToHtml(pokemonTypes){
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`);
// }

const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 10;
let offset = 0;
const maxRecords = 151;

function convertPokemonToHtml(pokemon){
    return `
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
    `
}

function loadPokemonItems(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToHtml).join('');
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

    //Para limitar os 151 da 1º Geração:
    // const qtdRecordsWithNextPage = offset + limit;
    // if(qtdRecordsWithNextPage >= maxRecords){
    //     const newLimit = maxRecords - offset
    //     loadPokemonItems(offset, newLimit);

    //     loadMoreButton.parentElement.removeChild(loadMoreButton);
    // } else {
    //     loadPokemonItems(offset, limit);
    // }

    //Sem limite de geração
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