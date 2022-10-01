import React from 'react';
import Styles from './Card.module.css';

function Card(props) {
    return (
        <div className={Styles.card}>
            <div className={Styles.card_heading}>
                <div>
                    <img className={Styles.card_img} src={props.img_path} alt="launch-pad_icon" />
                </div>
                <div className={Styles.card_name}>
                    <span>{props.name1}</span><span>{props.name2}</span>
                </div>
            </div>
            <div className={Styles.card_content}>
                {props.content}
            </div>
        </div>
    )
}

export default Card