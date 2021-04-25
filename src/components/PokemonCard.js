function PokemonCard(){
    return (
        <div className="ui card">
            <div>
            <div className="image">
                <img alt="oh no!" />
            </div>
            <div className="content">
                <div className="header">POKEMON NAME HERE</div>
            </div>
            <div className="extra content">
                <span>
                <i className="icon heartbeat red" />
                    POKEMON HP HERE hp
                </span>
            </div>
            </div>
        </div>
    )
}

export default PokemonCard