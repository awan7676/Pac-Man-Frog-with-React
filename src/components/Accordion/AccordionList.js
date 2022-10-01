import React from 'react';
import Accordion from './Accordion';
import Styles from './AccordionList.module.css';
import { accordionData } from './AccordionData';

function AccordionList() {
    return (
        <div className={Styles.accordion}>
            {accordionData.map(item => <Accordion question={item.question} answer={item.answer} />)}
        </div>
    )
}

export default AccordionList