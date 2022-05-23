const baseUrl = "https://pokeapi.co/api/v2/";



// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));


 const getData = async (input) => {
    const data = await fetch(baseUrl + 'pokemon/' + input);
    const main = await data.json();
    return main;
}


function search (){
     let inputSearch = document.getElementById("searchtext").value;
   // console.log (inputSearch) OK
    getData(inputSearch)
        .then (response => {
            console.log(response);
        });



};

