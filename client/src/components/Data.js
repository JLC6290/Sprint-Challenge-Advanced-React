import React, { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard';

const Data = props => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(props.players);
    console.log("props.players: ", props.players);
    useEffect(() => {
        const results = props.players.filter(player => {
            player.name.toLowerCase().includes(searchTerm)
        })
        setSearchResults(results);
    }, [searchTerm])

    const handleChange = event => {
        setSearchTerm(event.target.value)
    }
    console.log("searchResults ", searchResults);
    return (
        <div>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search players..."
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>
            <h2>Player List</h2>
            <div>
                {searchResults.map(item => {
                    return <PlayerCard key={item.id} name={item.name} country={item.country} searches={item.searches} />
                })}
            </div>
        </div>
    )
}
export default Data;