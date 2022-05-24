const baseUrl = "https://pokeapi.co/api/v2/pokemon/";


// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));


const getApiData = async (url) => {
    const data = await fetch(url);
    const main = await data.json();
    return main;
}


const infoPokemon = document.getElementById('infoPokemon');


function search() {
    document.getElementById('pokemons').innerHTML = '';
    document.getElementById('prevEvol').innerHTML = '';

    let inputSearch = document.getElementById('searchText').value;
    // console.log (inputSearch) OK
    getApiData(baseUrl + inputSearch)
        .then(response => {
            console.log('getDataResponse', response);
            let id = response.id;
            let name = response.name;
            let image = response.sprites['front_default'];
            const moves = response.moves.slice(0, 4);
            renderPokemons(name, id, image, moves, 'pokemons');
            const urlSpecies = response.species.url;
            getApiData(urlSpecies).then(
                res => {
                    const urlEvolutionChain = res['evolution_chain'].url;
                    console.log('speciesResult', res, urlEvolutionChain);
                    getApiData(urlEvolutionChain).then(
                        res => {
                            //const evolutionDetails = res.chain.evolves_to;
                            console.log('evolutionChainResult', res);
                            console.log('evolutionChainResultChain', res.chain['evolves_to']);
                            const arrayEvolvesTo = res.chain['evolves_to'];

                            if (arrayEvolvesTo.length){
                                const evolvesToSpecies = arrayEvolvesTo[0].species.name;
                                console.log(evolvesToSpecies);
                            }
                                }
                    )
                }
            )


            /*console.log('image', response.sprites);
            console.log('image', response.sprites['front_default']);

            console.log(moves[0].move.name);
            console.log(moves[1].move.name);
            console.log(response.moves[1]);

            console.log(response.name);
            getEvolution(inputSearch)
                .then(response =>{
                   // console.log(response);
                   // console.log(response.chain.evolves_to[0].species.name);
                    const evolutionName = response.chain.evolves_to[0].species.name;
                    getData(evolutionName)
                        .then (response=>{
                            let id = response.id;
                            let name = response.name;
                            let image = response.sprites['front_default'];
                            const moves = response.moves.slice(0, 4);
                            renderPokemons(evolutionName, id, image, moves, 'prevEvol');
                        })

                });
            renderPokemons(name, id, image, moves, 'pokemons');
            */
        });


    function renderPokemons(name, id, image, moves, container) {
        const pokemons = document.getElementById(container);
        const item = infoPokemon.content.cloneNode(true);

        item.querySelector('.pokemonImage').src = image;
        item.querySelector('.pokemonImage').alt = name;
        item.querySelector('.pokemonName').innerHTML = name;
        item.querySelector('.pokemonId').innerHTML = `N° ${id}`;
        let ulMoves = document.createElement("ul");

        for (let i = 0; i < moves.length; i++) {
            let liMoves = document.createElement("li");
            liMoves.innerHTML = moves[i].move.name;

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

