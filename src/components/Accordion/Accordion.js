import React from 'react';
import Styles from './Accordion.module.css';
import { useState } from 'react';

function Accordion(props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={Styles.accordion_item}>
            <div className={Styles.accordion_title} onClick={() => setIsActive(!isActive)}>
                <div
                    className={Styles.accordion_question}
                    style={{ color: isActive ? 'rgba(22,163,74,1)' : 'black' }}
                >
                    {props.question}
                </div>
                <div className={Styles.accordion_sign}>{isActive ? '-' : '+'}</div>
            </div>
            {isActive &&
                <div className={Styles.accordion_content}>
                    <div className={Styles.accordion_sign}>-</div>
                    <div className={Styles.accordion_answer}>{props.answer}</div>
                </div>
            }
        </div>
    )
}

export default Accordion