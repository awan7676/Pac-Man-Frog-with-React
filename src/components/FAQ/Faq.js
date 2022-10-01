import React from 'react';
import './Faq.css';
import AccordionList from '../Accordion/AccordionList';
import Button from '../Button/Button';

function Faq() {
    return (
        <div className='faq' id='faq-id'>
            <div className='faq-heading'>
                <span className='faq-uncolored-heading'>
                    Frequently Asked
                    <span className='faq-colored-heading'>
                        Questions
                    </span>
                </span>
            </div>
            <AccordionList />
            <div className='footer'>
                <div className='footer-button'>
                    <Button text="Enter Presale" />
                </div>
                <div className='footer-title'>
                    <img className='what-do-img-footer' src="/img/what_do_img.png" alt="what_do_img" />
                    <span className='footer-heading'>Pac-Man<span className='font-bold'>Frog</span></span>
                </div>
                <span className='rights-reserved'>© 2019
                    Pacman Frog. All rights reserved.
                </span>
            </div>
        </div>
    )
}

export default Faq