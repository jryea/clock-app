import React from 'react';
import Button from './Button';
import sunIcon from '../assets/desktop/icon-sun.svg';
import moonIcon from '../assets/desktop/icon-moon.svg';

function TimeSection({ handleClick, buttonClicked, time, timezone, location }) {
  function setTimeOfDay(time) {
    const hours = Number(time.slice(0, 2));
    console.log(hours);
    if (hours > 0 && hours < 12) return 'morning';
    else if (hours >= 12 && hours < 18) return 'afternoon';
    else if (hours >= 18) return 'evening';
    else return hours;
  }

  return (
    <main>
      <div className='time-section'>
        <div className='time-greeting'>
          <img
            className='sun-icon'
            src={setTimeOfDay(time) === 'evening' ? moonIcon : sunIcon}
          />
          <h4>{`Good ${setTimeOfDay(time)}`}</h4>
        </div>
        <h1>
          {time.slice(0, 2) > 12 ? time.slice(0, 2) - 12 + time.slice(2) : time}
          <span>{timezone}</span>
        </h1>
        <h3>{`In ${location}`}</h3>
        <Button handleClick={handleClick} buttonClicked={buttonClicked} />
      </div>
    </main>
  );
}

export default TimeSection;
