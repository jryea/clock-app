import React from 'react';
import Button from './Button';
import sunIcon from '../assets/desktop/icon-sun.svg';

function TimeSection({ handleClick, buttonClicked }) {
  return (
    <main>
      <div className='time-section'>
        <div className='time-greeting'>
          <img className='sun-icon' src={sunIcon} />
          <h4>Good morning</h4>
        </div>
        <h1>
          11:37<span>BST</span>
        </h1>
        <h3>In London, UK</h3>
        <Button handleClick={handleClick} buttonClicked={buttonClicked} />
      </div>
    </main>
  );
}

export default TimeSection;
