import React from 'react';
import arrowDownIcon from '../assets/desktop/icon-arrow-down.svg';

function Button() {
  return (
    <div className='more-button'>
      <p>More</p>
      <div className='more-button-select'>
        <img src={arrowDownIcon} alt='down arrow' />
      </div>
    </div>
  );
}

export default Button;
