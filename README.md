# 05-# AJAX Pokédex

https://greetverduyn.github.io/05-23_AJAX-Pok-dex/

## Practical Information

* Repository: `ajax-pokedex`
* Deadline: 3 days
* Delivery: Github page (published)
* Solo challenge

## Learning Objectives

* A typical AJAX flow: send asynchronous requests to a remote server and process the results;
* **[JSON](https://www.w3schools.com/js/js_json_intro.asp)** (JavaScript Object Notation) format;
* DOM manipulation: changing the DOM based on results of AJAX-requests.

## Exercise

Make a [Pokédex](https://www.google.com/search?q=pokedex&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiRtNT3-vDfAhWDy6QKHd1cBD4Q_AUIDigB&biw=1300&bih=968#imgrc=_) using [this API](https://pokeapi.co/).

Basic functionality that is expected (read: core features):
* You can search a pokémon by name and by ID
* Of said pokémon you need to show:
    * The ID-number
    * An image (sprite)
    * _At least_ 4 "moves"
    * The previous evolution, _only if it exists_, along with their name and image. Be carefull, you cannot just do ID-1 to get the previous form, for example look into "magmar" - "magmortar". You have to use a seperate api call for this!

Make your web page look like a pokédex by adding a little CSS.

_Note: For this exercise, the goal is to keep working on it, until the deadline is reached. If you are finished adding all "core features", look at what else the API has to offer, and try adding some other features. At the end of the deadline, everyone is going to present the pokédex they made; As such it is important that you have published your web page on GitHub!_

## WHAT TO DO (checklis)
- [x] make new repo
- [x] add HTMl, JS, SCSS, read me, .ignore
- [x] read info
- [x] make file public
  - [x] fetch data (function (await fetch url, await respons))
    - const getData = async () => {
         const data = await fetch(baseUrl + 'pokemon');
         const main = await data.json();
         console.log(main);
    return main;
    }
- [x] search a pokémon by name and by ID
- [x] Html: input + button (+ onclick)
- [x] get info from input (fetch) and put it in the function
- [x] get move from fetch by looping true array (slice 0,4)
- x[] get previous evolution (name + picture) finding right API wasn't that clear
  - [x] + put info in template
- [x]  design pokedex
  - [x] 1 top
  - [x] 2 div wit picture and info pokemon + evolution
  - [x] making enough <div> elements
add

  
# Extra challenge
There are a couple of pokemon that don't play with the normal rules, add code so their cases are also handled elegantly.

- Ditto only has 1 move.
- Eevee has 6 evolutions.

![Pokedex](pokedex.jpg)
23_AJAX-Pok-dex