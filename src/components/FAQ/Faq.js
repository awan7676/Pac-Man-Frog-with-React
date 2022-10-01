import React from 'react';
import Styles from './Faq.module.css';
import AccordionList from '../Accordion/AccordionList';
import Button from '../Button/Button';

function Faq() {
    return (
        <div className={Styles.faq} id='faq-id'>
            <div className={Styles.main_heading}>
                <span className={Styles.uncolored_part}>
                    Frequently Asked
                    <span className={Styles.colored_part}>
                        Questions
                    </span>
                </span>
            </div>
            <AccordionList />
            <div className={Styles.footer}>
                <div className={Styles.footer_button}>
                    <Button text="Enter Presale" />
                </div>
                <div className={Styles.footer_title}>
                    <img className={Styles.what_do_img_footer} src="/img/what_do_img.png" alt="what_do_img" />
                    <span className={Styles.footer_heading}>Pac-Man<span className={Styles.font_bold}>Frog</span></span>
                </div>
                <span className={Styles.rights_reserved}>© 2019
                    Pacman Frog. All rights reserved.
                </span>
            </div>
        </div>
    )
}

export default Faq