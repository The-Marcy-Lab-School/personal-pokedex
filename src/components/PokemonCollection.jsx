import { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';
import PokemonCard from './PokemonCard';

function PokemonCollection(){

    const { pokemon } = useContext(PokemonContext);
    
    return (
        <div className="ui six cards">
            {pokemon.map(pokemon => <PokemonCard key={pokemon.id}/>)}
        </div>
    )
}

export default PokemonCollection