import { useState } from "react";

// TODO: Import the PokemonContext

function ContextProvider({ children }) { 
    const [pokemon, setPokemon] = useState([])
    // TODO: Add any other state values you need

    // TODO: use useEffect to fetch data from the local JSON server

    // TODO: Add values to be included in the context here
    let contextValues = {
        pokemon, setPokemon
    }

    // TODO: Wrap the {children} in the PokemonContext.Provider and provide the values above
    return (
        {children}
    )
}

export default ContextProvider;