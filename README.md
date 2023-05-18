# Personal Pokedex Lab

Build a React front-end application for browsing your collection of pokemon. You can view the pokemon you've already "caught", add new pokemon to your collection, and filter pokemon. In this project, you will practice:
* Using `useState` to manage the various pieces of state in your application
* Using the React Context API to establish global state values
* Using `useEffect` and `fetch` to read from a dummy API
* Creating controlled components
* Handling click events

![demo](./demo.gif)

#### Features

0. On load of the page, a user see a list of pokemon cards displaying each pokemon's name, front sprite, and HP level.
1. A user can fill out and submit the form to create a new pokemon. This will display the new pokemon on the page and the new pokemon data should persist, even after the page is refreshed. This means you'll have to make a POST request to our JSON Server API!
2. A user can use the search bar to filter pokemon by name.
3. A user can click on a pokemon card to toggle seeing its front sprite or back sprite.
4. The form must be a controlled component.
5. This assignment must use React Context.

## Set Up

Make sure you `cd` into the project directory.

In one terminal, run `npm install` to set up dependencies. Then run `npm start` to start the React App. This is your Front-End.

In another temrinal, run `json-server --watch db.json --port 4000` to start a mock back-end server on port 4000. If you get an error, make sure you have JSON server installed globally by running `npm install -g json-server`. Now, you will have a RESTful API that you can access via the URL `http://localhost:4000/pokemon`.

#### JSON Server API

JSON Server is a tool to we use to spin up a mock API. It is a great alternative to consuming from a API when you don't have the time to build out a full Express API. It does have its limitation in that it cannot support a robust relationships database. If you need a refresher, see the JSON Server documentation [here](https://github.com/typicode/json-server#getting-started).

You will be GETting pokemon data from the URL `http://localhost:4000/pokemon`.

To create new pokemon records, you will be POSTing to the same URL `http://localhost:4000/pokemon`.

* When POSTing, you will need to include a `Content-Type: application/json` header. For the `body` of the request, see the data structure of the existing pokemon in `db.json` as an example of what to include in the `body`.
* See the example below of sending a POST request with `fetch` and an `options` object.

```js
const exampleOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ key: "value" }),
};
const url = "http://example.com/api";
const response = await fetch(url, exampleOptions);
const data = await response.json();
```

## Steps For Completing The First Feature In Assignment:

We'll walk through the process of fetching pokemon data and providing it via context to the entire application.

#### 0. Check out the PokemonCollection

Open up `src/components/PokemonCollection`. This component demonstrates the basics of how to use context and we're giving it to you for free!

Check out how we import the `PokemonContext` and then use the `useContext` hook to bring in the required data (and only the required data) into the component.

Finally, see how we use the `pokemon` data to render a list of `PokemonCard` components.

This isn't working because the `PokemonContext` doesn't exist yet and because the application hasn't been provided that context. Let's do that!

#### 1. Create the context

Open up the `src/context/PokemonContext.jsx` file. This is where you'll create your context and export it.

This file is boilerplate (its _mostly_ the same in every project) so we will give it to you for free!

```jsx
// PokemonContext.jsx
import { createContext } from "react";

const PokemonContext = createContext();

export default PokemonContext;
```

We simply create the `PokemonContext` so that it may be used throughout our application.

#### 2. Complete the Provider component

Open up the `src/context/PokemonProvider.jsx` file. This is where you'll create and export the `PokemonProvider` component that will wrap around your entire application.

This is also where you will manage the state values in your application and make your fetch.

You'll regularly return to this file as you build the features of this application.

1. Start by importing the `PokemonContext` you just created.
2. Then, return a `PokemonContext.Provider`, making sure to wrap the `children` prop.
3. Set `value` prop on the `PokemonContext.Provider` to `contextValues`.

For example, with a context value called `MyContext`, the rendered JSX would be:

```jsx
<MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
```

As you add more state values to the context, you'll add those values to `contextValues`

#### 3. Wrap the App in the provider

Open up the `main.jsx` file. Here is where you'll wrap the entire `App` component in the `PokemonProvider` you just created.

1. Import the `PokemonProvider` component.
2. Render the `PokemonProvider` component such that it fully wraps the `App` component

Here is a generic example:

```jsx
return (
  <Provider>
    <App />
  </Provider>
);
```

#### 4. Test

At this point, you should have properly linked everything up. Your application now has context!

To test this out, recall that the `PokemonCollection` component is set up to use the `pokemon` value provided by the `PokemonContext`. However, nothing is rendered yet because the `pokemon` array is empty!

Head back to `src/context/PokemonProvider.jsx` and modify the line where the `pokemon` state is set up. We can test that our context works by adding empty objects to the default array, like so:

```jsx
const [pokemon, setPokemon] = useState([{}, {}, {}]);
```

Save your code, run your dev server, and you should see 3 rendered `PokemonCard` components without any data!

If this didn't work, go back through the first three steps before moving on.

If it did, make sure to remove those three empty objects.

#### 5. Fetch Pokemon Data

To populate the data in the `pokemon` array, we need to fetch from the JSON server database that you should have up and running. If you don't have it running yet, run

```sh
npm i -D json-server # skip this if you have json-server already installed
json-server --watch db.json --port 4000
```

If you want, you can use the `fetch` helper function below:

```js
const handleFetch = async (url, options) => {
  try {
    const r = await fetch(url, options);
    const data = await r.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
```

Then, do the following in your `PokemonProvider`:

1. Import `useEffect`
2. Invoke `useEffect` with a callback that fetches from your local JSON server API which should have the URL `"http://localhost:4000/pokemon"`.
3. If data is returned, it should update the `pokemon` state value.
4. Make sure that this effect only runs once when the application first renders.

If this worked properly, your `PokemonProvider` will re-render with the new `pokemon` values provided. As a result, you should see 12 cards.

The data for these cards are not properly hooked up yet so you will need to work in the `src/components/PokemonCollection` file and the `src/components/PokemonCard` file to pass the appropriate props to each card and render them in the card.

#### You're on your own now.

At this point, we've practiced using context, `useEffect`, `useState`, and props. You're more than equipped to implement the remaining features on your own.

You got this!

### Tip: Sprites

When posting new pokemon to the database, you'll need to include sprites for the front and back of the pokemon.

You can find pokemon sprites in this [GitHub Repo](https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon). But you should use the raw URL. For example:

- `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/<filename>.png`
- `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/<filename>.png`

### Bonus:

Add a feature to **additionally** filter pokemon by the HP amount. You can use any type of input, but we reccommend using a [range input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range). For example, if the user sets the range value to 50, then only show pokemon with an HP value _equal to or over_ 50. Remember to store that value of the input in state!
