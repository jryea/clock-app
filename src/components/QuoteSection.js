import React from 'react';
import refresh from '../assets/desktop/icon-refresh.svg';

function QuoteSection({ displayed = true }) {
  return (
    <aside className={`quote-section ${displayed ? '' : 'hidden'}`}>
      <div className='quote-section-main'>
        <p className='quote'>
          "The science of operations, as drived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value."
        </p>
        <img className='refresh-icon' src={refresh} />
      </div>
      <p className='quote-author'>Ada Lovelace</p>
    </aside>
  );
}

export default QuoteSection;
