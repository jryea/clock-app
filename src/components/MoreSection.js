import React from 'react';

function MoreSection() {
  return (
    <section className='more-section'>
      <div className='more-section-left'>
        <div className='more-info-block'>
          <h2 className='more-title'>Current timezone</h2>
          <p className='more-info'>Day of the year</p>
        </div>
        <div className='more-info-block'>
          <h2 className='more-title'>Day of the year</h2>
          <p className='more-info'>295</p>
        </div>
      </div>
      <div className='more-section-right'>
        <div className='more-info-block'>
          <h2 className='more-title'>Day of the week</h2>
          <p className='more-info'>5</p>
        </div>
        <div className='more-info-block'>
          <h2 className='more-title'>Week number</h2>
          <p className='more-info'>42</p>
        </div>
      </div>
    </section>
  );
}

export default MoreSection;
