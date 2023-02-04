import './style.css';

import React from 'react';
import { useState, useEffect } from 'react';
import useSWR from 'swr';

import { formatTime } from './helpers';

import QuoteSection from './components/QuoteSection';
import TimeSection from './components/TimeSection';
import MoreSection from './components/MoreSection';

const QUOTE_ENDPOINT = 'https://stoicquotesapi.com/v1/api/quotes/random';
const IP_LOCATION_ENDPOINT = 'http://ip-api.com/json/';
const TIME_ENDPOINT = `http://worldtimeapi.org/api/timezone/America/Denver`;

// function createTimeEndpoint(timezone, city) {
//   if (timezone || city === undefined) return;
//   const formattedCountry = timezone.split('/');
//   const formattedCity = city.split().join('_');
//   const timeEndpoint = `${TIME_ENDPOINT}${formattedCountry}/${formattedCity}`;
//   console.log(timeEndpoint);
//   return timeEndpoint;
// }

async function fetcher(endpoint) {
  const response = await fetch(endpoint);
  const json = await response.json();
  return json;
}

function App() {
  const { data: quoteData, error: errorData } = useSWR(QUOTE_ENDPOINT, fetcher);
  const { data: ipData, error: ipError } = useSWR(
    IP_LOCATION_ENDPOINT,
    fetcher
  );

  const { data: timeData, error: timeError } = useSWR(TIME_ENDPOINT, fetcher);

  const location = `${ipData?.city}, ${
    ipData?.country === 'United States' ? ipData?.region : ipData?.country
  }`;

  console.log(location);
  const [time, setTime] = useState(new Date());
  const [moreScreen, setMoreScreen] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(() => new Date());
    }, 10 * 1000);
    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  function buttonPush() {
    setMoreScreen(() => !moreScreen);
  }

  function handleRefresh() {
    setRefresh(() => !refresh);
  }

  return (
    <div
      className={`app ${formatTime(time).slice(0, 2) > 17 ? 'evening' : 'day'}`}
    >
      {
        <QuoteSection
          displayed={!moreScreen}
          quote={quoteData?.body}
          author={quoteData?.author}
          handleRefresh={handleRefresh}
        />
      }
      <TimeSection
        handleClick={buttonPush}
        buttonClicked={moreScreen}
        time={formatTime(time)}
        location={location}
        timezone={timeData?.abbreviation}
      />
      {
        <MoreSection
          displayed={moreScreen}
          timezone={timeData?.timezone}
          dayOfYear={timeData?.day_of_year}
          dayOfWeek={timeData?.day_of_week}
          weekNumber={timeData?.week_number}
        />
      }
    </div>
  );
}

export default App;
