import React from 'react';
import refresh from '../assets/desktop/icon-refresh.svg';

function QuoteSection({ displayed = true, quote, author, handleRefresh }) {
  return (
    <aside className={`quote-section ${displayed ? '' : 'hidden'}`}>
      <div className='quote-section-main'>
        <p className='quote'>"{quote}"</p>
        <img className='refresh-icon' src={refresh} onClick={handleRefresh} />
      </div>
      <p className='quote-author'>{author}</p>
    </aside>
  );
}

export default QuoteSection;
