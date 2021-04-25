import PokemonForm from './PokemonForm'
import Search from './Search'
import PokemonCollection from './PokemonCollection'

function App() {
  return (
    <div className="App ui container">
      <h1>Pokedex</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection />
    </div>
  );
}

export default App;
