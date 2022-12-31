# Personal Pokedex Lab

You'll be building the following project: 

![demo](./demo.gif)

## Features

1. A user can fill out and submit the form to create a new pokemon. This will display the new pokemon on the page and the new pokemon data should persist, even after the page is refreshed. This means you'll have to make a POST request to the API!
2. A user can use the search bar to filter pokemon by name.
3. A user can click on a pokemon card to toggle seeing its front sprite or back sprite.

### Tip 1: Remember Controlled Components

Every time you see a form or input of any type, store that value in state! The starter code is designed to guide you in bulding out this app. However, **you are allowed to change the code however you see fit.** If you can figure out a better or DRYer way to store state, go ahead!

### Tep 2: Sprites

You can find pokemon sprites in this [GitHub Repo](https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon). But you should use the raw URL. For example, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/<filename>.png` and `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/<filename>.pgn`

## Set Up

Make sure you `cd` into the project directory.

In one terminal, run `npm install` to set up dependencies. Then run `npm start` to start the React App. This is your Front-End.

In another temrinal, run `json-server --watch db.json --port 4000` to start a mock back-end server on port 4000. If you get an error, make sure you have JSON server installed globally by running `npm install -g json-server`. This is your Back-End.

## JSON Server API

If you need a refresher, see the JSON Server documentation [here](https://github.com/typicode/json-server#getting-started).

You will be getting pokemon data from the URL `http://localhost:4000/pokemon`.

In order for your data to persist, you will be POSTing to the same URL `http://localhost:4000/pokemon`. 

Remember, for JSON Server, you will need to include a `Content-Type: application/json` header. For the body of the request, see the data structure of the existing pokemon as an exmple.


## Bonus:

Add a feature to **additionally** filter pokemon by the HP amount. You can use any type of input, but we reccommend using a [range input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range). For example, if the user sets the range value to 50, then only show pokemon with an HP value _equal to or over_ 50. Remember to store that value of the input in state! 
