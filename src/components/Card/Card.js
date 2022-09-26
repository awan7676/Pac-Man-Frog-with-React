import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className='card'>
            <div className='card-heading'>
                <div>
                    <img className='card-img' src={props.img_path} alt="launch-pad_icon" />
                </div>
                <div className='card-name'>
                    <span>{props.name1}</span><span>{props.name2}</span>
                </div>
            </div>
            <div className='card-content'>
                {props.content}
            </div>
        </div>
    )
}

export default Card