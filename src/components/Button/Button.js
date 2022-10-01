import React from 'react';
import Styles from './Button.module.css';

function Button(props) {
    return (
        <div>
            <button className={Styles.button}>
                {props.text}
            </button>
        </div>
    );
}

export default Button