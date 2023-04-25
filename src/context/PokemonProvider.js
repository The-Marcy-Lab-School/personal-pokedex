import { useState } from "react";
import Context from "./PokemonContext";

function ContextProvider({ children }) { 
    const [pokemon] = useState([])

    let value = {
        pokemon,
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;