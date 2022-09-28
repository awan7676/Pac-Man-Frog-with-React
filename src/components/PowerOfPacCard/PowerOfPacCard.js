import React from 'react';
import './PowerOfPacCard.css';

function PowerOfPacCard(props) {
    return (
        <div className='power-of-pac-card'>
            <div>
                <img className='card-tick' src='img/tick_icon.png' alt="tick_icon.png" />
            </div>
            <div>
                <span className='power-of-pac-card-name'>
                    {props.name}
                </span>
            </div>
        </div>
    )
}

export default PowerOfPacCard