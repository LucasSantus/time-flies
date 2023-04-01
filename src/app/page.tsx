'use client';

import { useEffect, useState } from 'react';

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 60 * 60 * 3; // 3 hours

export default function Home() {
  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (isActive && secondsAmount > 0) {
      intervalId = setInterval(() => {
        setSecondsAmount((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, secondsAmount]);

  const hours = Math.floor(secondsAmount / 3600);
  const minutes = Math.floor((secondsAmount % 3600) / 60);
  const seconds = secondsAmount % 60;

  return (
    <div>
      <div>
        <span>{String(hours).padStart(2, '0')}</span>
        <span>:</span>
        <span>{String(minutes).padStart(2, '0')}</span>
        <span>:</span>
        <span>{String(seconds).padStart(2, '0')}</span>
      </div>
      <button onClick={() => setIsActive((prevIsActive) => !prevIsActive)}>{isActive ? 'Pause' : 'Start'}</button>
      {!isActive && <button onClick={() => setSecondsAmount(COUNTDOWN_INITIAL_TIME_IN_SECONDS)}>Stop</button>}
    </div>
  );
}
