import React from 'react';

const PlayerCard = props => {

    return (
        <div className="player">
            <p>Player: {props.name} Search hits: {props.searches}</p>
        </div>
    )
}
export default PlayerCard;