import React from 'react';
import Styles from './AboutUs.module.css';
import CardsList from '../Card/CardsList';
function AboutUs() {
    return (
        <div className={Styles.about_us} id='abt-us'>
            <div className={Styles.main_heading}>
                <span className={Styles.uncolored_part}>
                    What Do
                    <span className={Styles.colored_part}>We Do?</span>
                </span>
                <span className={Styles.description}>Pacman Frog is set on the
                    initiative of building a decentralized community by offering a diverse set of services in
                    its ever-evolving ecosystem.</span>
            </div>
            <CardsList />
        </div >
    )
}

export default AboutUs