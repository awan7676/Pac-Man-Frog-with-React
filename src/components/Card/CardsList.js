import React from 'react';
import { cardsArray } from './CardDetails';
import Card from './Card';
import Styles from './CardsList.module.css';
import Carousel from 'react-elastic-carousel';

function CardsList(props) {
    return (
        <div className={Styles.cards_area}>
            <div className={Styles.cards_area_desktop}>
                {cardsArray.map(item => <Card key={item.id} name1={item.name1} name2={item.name2} content={item.content} img_path={item.img_path} ico={item.icon_name} />)}
            </div>

            <div className={Styles.cards_area_responsive}>
                <Carousel>
                    {cardsArray.map(item => <Card key={item.id} name1={item.name1} name2={item.name2} content={item.content} img_path={item.img_path} ico={item.icon_name} />)}
                </Carousel>
            </div>
        </div>

    )
}

export default CardsList 