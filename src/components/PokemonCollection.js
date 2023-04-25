import { useContext } from 'react'
import PokemonCard from './PokemonCard'
import PokemonContext from '../context/PokemonContext'

function PokemonCollection(){
    const {pokemon} = useContext(PokemonContext)

    return (
        <div className="ui six cards">
            {pokemon.map(pokemon => <PokemonCard key={pokemon.id}/>)}
        </div>
    )
}

export default PokemonCollection