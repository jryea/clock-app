import React from 'react';

function MoreSection({
  displayed,
  timezone,
  dayOfYear,
  dayOfWeek,
  weekNumber,
}) {
  return (
    <section className={`more-section ${displayed ? 'displayed' : ''}`}>
      <div className='more-section-left'>
        <div className='more-info-block'>
          <h4 className='more-title'>Current timezone</h4>
          <h5 className='more-info'>{timezone}</h5>
        </div>
        <div className='more-info-block'>
          <h4 className='more-title'>Day of the year</h4>
          <h5 className='more-info'>{dayOfYear}</h5>
        </div>
      </div>
      <div className='more-section-right'>
        <div className='more-info-block'>
          <h4 className='more-title'>Day of the week</h4>
          <h5 className='more-info'>{dayOfWeek}</h5>
        </div>
        <div className='more-info-block'>
          <h4 className='more-title'>Week number</h4>
          <h5 className='more-info'>{weekNumber}</h5>
        </div>
      </div>
    </section>
  );
}

export default MoreSection;
