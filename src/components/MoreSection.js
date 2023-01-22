import React from 'react';

function MoreSection({ displayed }) {
  return (
    <section className={`more-section ${displayed ? 'displayed' : ''}`}>
      <div className='more-section-left'>
        <div className='more-info-block'>
          <h4 className='more-title'>Current timezone</h4>
          <h5 className='more-info'>Europe/London</h5>
        </div>
        <div className='more-info-block'>
          <h4 className='more-title'>Day of the year</h4>
          <h5 className='more-info'>495</h5>
        </div>
      </div>
      <div className='more-section-right'>
        <div className='more-info-block'>
          <h4 className='more-title'>Day of the week</h4>
          <h5 className='more-info'>5</h5>
        </div>
        <div className='more-info-block'>
          <h4 className='more-title'>Week number</h4>
          <h5 className='more-info'>44</h5>
        </div>
      </div>
    </section>
  );
}

export default MoreSection;
