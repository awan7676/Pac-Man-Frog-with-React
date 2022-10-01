import React from 'react';
import { drop_down_items } from './DropDownItems';
import './DropDown.css';

function DropDown() {
  return (
    <div>
      <ul className='sub-menu'>
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