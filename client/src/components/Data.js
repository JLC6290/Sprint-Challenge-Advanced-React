import React from 'react';
import PlayerCard from './PlayerCard';

const Data = props => {

    console.log("Data props: ", props.players)
    return (
        <div>
            <h2>Player List</h2>
            <div>
                {props.players.map(item => {
                    return <PlayerCard key={item.id} name={item.name} searches={item.searches} />
                })}
            </div>
        </div>
    )
}
export default Data;