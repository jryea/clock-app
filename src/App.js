import './style.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import QuoteSection from './components/QuoteSection';
import TimeSection from './components/TimeSection';
import MoreSection from './components/MoreSection';

function App() {
  const [moreScreen, setMoreScreen] = useState(false);
  const [currentTime, setCurrentTime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function buttonPush() {
    setMoreScreen(() => !moreScreen);
  }

  useEffect(() => {
    fetch('http://worldtimeapi.org/api')
      .then((res) => {
        res.json();
      })
      .then((data) => console.log(data));
    // .catch((error) => console.log('ERROR'));
  }, []);

  return (
    <div className='app '>
      {<QuoteSection displayed={!moreScreen} />}
      <TimeSection handleClick={buttonPush} buttonClicked={moreScreen} />
      {<MoreSection displayed={moreScreen} />}
    </div>
  );
}

export default App;
