import React from 'react';
import './Accordion.css';
import { useState } from 'react';

function Accordion(props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className='accordion-item'>
            <div className='accordion-title' onClick={() => setIsActive(!isActive)}>
                <div
                    className='accordion-question'
                    style={{ color: isActive ? 'rgba(22,163,74,1)' : 'black' }}
                >
                    {props.question}
                </div>
                <div className='accordion-sign'>{isActive ? '-' : '+'}</div>
            </div>
            {isActive &&
                <div className='accordion-content'>
                    <div className='accordion-sign'>-</div>
                    <div className="accordion-answer">{props.answer}</div>
                </div>
            }
        </div>
    )
}

export default Accordion