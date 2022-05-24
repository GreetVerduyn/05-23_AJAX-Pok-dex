const baseUrl = "https://pokeapi.co/api/v2/";


// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));


const getData = async (input) => {
    const data = await fetch(baseUrl + 'pokemon/' + input);
    const main = await data.json();
    return main;
}
const pokemons = document.getElementById("pokemons");
const infoPokemon = document.getElementById("infoPokemon");


function search() {
    pokemons.innerHTML = '';
    let inputSearch = document.getElementById("searchText").value;
    // console.log (inputSearch) OK
    getData(inputSearch)
        .then(response => {
            const moves = response.moves.slice(0, 4);
            console.log(response);
            let id = response.id;
            let name = response.name;
            let image = response.sprites['front_default'];
            console.log('image', response.sprites);
            console.log('image', response.sprites['front_default']);

            console.log(moves[0].move.name);
            console.log(moves[1].move.name);
            console.log(response.moves[1]);

            console.log(response.name);
            renderPokemons(name, id, image, moves);
        });

    function renderPokemons(name, id, image, moves) {

        const item = infoPokemon.content.cloneNode(true);

        item.querySelector('.pokemonImage').src = image;
        item.querySelector('.pokemonImage').alt = name;
        item.querySelector('.pokemonName').innerHTML = name;
        item.querySelector('.pokemonId').innerHTML = id;
        let ulMoves= document.createElement("ul");

        for (let i=0; i< moves.length; i++ ){
            let liMoves = document.createElement("li");
            liMoves.innerHTML= moves[i].move.name;

           ulMoves.appendChild(liMoves);
        }


        item.querySelector('.pokemonMoves').appendChild(ulMoves);


        //item.querySelector('.front').alt = playCards[i].name;


        /*item.querySelector('.searchButton').addEventListener("click", function ($event) {
            renderPokemons();
        })*/
        pokemons.append(item);
    }


};

