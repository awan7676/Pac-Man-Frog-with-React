import React from 'react';
import Styles from './PowerOfPacCard.module.css';

function PowerOfPacCard(props) {
    return (
        <div className={Styles.power_of_pac_card}>
            <div>
                <img className={Styles.card_tick} src='img/tick_icon.png' alt="tick_icon.png" />
            </div>
            <div>
                <span className={Styles.power_of_pac_card_name}>
                    {props.name}
                </span>
            </div>
        </div>
    )
}

export default PowerOfPacCard