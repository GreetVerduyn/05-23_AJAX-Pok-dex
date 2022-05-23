const baseUrl = "https://pokeapi.co/api/v2/";



// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));


(() => {
    async function getData(){
        let data = await fetch(
            baseUrl + 'pokemon');
        let main = await data.json();
        console.log(main);

    }
    getData()
})
();