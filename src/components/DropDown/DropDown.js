import React from 'react';
import { drop_down_items } from './DropDownItems';
import Styles from './DropDown.module.css';

function DropDown() {
  return (
    <div>
      <ul className={Styles.sub_menu}>
        {drop_down_items.map(item => {
          return (
            <a href={item.href} key={item.id}> {item.title} </a>
          );

        })}
      </ul>
    </div>
  )
}

export default DropDown