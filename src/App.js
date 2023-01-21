import './style.css';
import React from 'react';
import Button from './components/Button';
import QuoteSection from './components/QuoteSection';
import TimeSection from './components/TimeSection';
import MoreSection from './components/MoreSection';

function App() {
  return (
    <div className='app'>
      <QuoteSection />
      <TimeSection />
      {/* <MoreSection /> */}
    </div>
  );
}

export default App;
