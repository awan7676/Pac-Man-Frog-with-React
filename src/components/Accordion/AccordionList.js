import React from 'react';
import Accordion from './Accordion';
import './AccordionList.css';
import { accordionData } from './AccordionData';

function AccordionList() {
    return (
        <div className='accordion'>
            {accordionData.map(item => <Accordion question={item.question} answer={item.answer} />)}
        </div>
    )
}

export default AccordionList