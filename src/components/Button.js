import React from 'react';
import { useState } from 'react';
import arrowDownIcon from '../assets/desktop/icon-arrow-down.svg';
import arrowUpIcon from '../assets/desktop/icon-arrow-up.svg';

function Button({ handleClick, buttonClicked }) {
  return (
    <div className='more-button' onClick={handleClick}>
      <p>{buttonClicked ? 'Less' : 'More'}</p>
      <div className='more-button-select'>
        <img
          src={buttonClicked ? arrowUpIcon : arrowDownIcon}
          alt='down arrow'
        />
      </div>
    </div>
  );
}

export default Button;
