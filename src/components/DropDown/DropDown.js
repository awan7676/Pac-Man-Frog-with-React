import React from 'react';
import { drop_down_items } from './DropDownItems';
import './DropDown.css';

function DropDown() {
  return (
    <div>
      <ul className='sub-menu'>
        {drop_down_items.map(item => {
          return (
            <li key={item.id}> {item.title} </li>
          );

        })}
      </ul>
    </div>
  )
}

export default DropDown