import PokemonForm from './PokemonForm'
import Filter from './Filter'
import PokemonCollection from './PokemonCollection'

function App() {
  return (
    <div className="App ui container">
      <h1>Pokedex</h1>
      <br />
      <PokemonForm />
      <br />
      <Filter />
      <br />
      <PokemonCollection />
    </div>
  );
}

export default App;
