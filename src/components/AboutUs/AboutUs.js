import React from 'react';
import './AboutUs.css';
import CardsList from '../Card/CardsList';
function AboutUs() {
    return (
        <div className='about-us' id='abt-us'>
            <div className='main-heading'>
                <span className='what-do-we-do-heading'>
                    What Do
                    <span className='We-Do'>We Do?</span>
                </span>
                <span className='description'>Pacman Frog is set on the
                    initiative of building a decentralized community by offering a diverse set of services in
                    its ever-evolving ecosystem.</span>
            </div>
            <CardsList />
        </div >
    )
}

export default AboutUs