import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <div>
            <button className='button active:hover:bg-green-700'>
                {props.text}
            </button>
        </div>
    );
}

export default Button