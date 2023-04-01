import { formatTime } from '@/utils/formatTime';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';

export interface CountdownContextData {
  secondsAmount: number;
  isCountdownActive: boolean;
  hours: string;
  minutes: string;
  seconds: string;
  startCountdown: (time: number) => void;
  pauseCountdown: () => void;
  stopCountdown: () => void;
}

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 30 * 60; // Initial value of 30 minutes

export const CountdownContext = createContext<CountdownContextData>({} as CountdownContextData);

export const CountdownProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS);
  const [isCountdownActive, setIsCountdownActive] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isCountdownActive && secondsAmount > 0) {
      intervalId = setInterval(() => {
        setSecondsAmount((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isCountdownActive, secondsAmount]);

  const hours = formatTime(Math.floor(secondsAmount / 3600));
  const minutes = formatTime(Math.floor((secondsAmount % 3600) / 60));
  const seconds = formatTime(secondsAmount % 60);

  function startCountdown(time: number) {
    setSecondsAmount(time);
    setIsCountdownActive(true);
  }

  function pauseCountdown() {
    setIsCountdownActive(false);
  }

  function stopCountdown() {
    setIsCountdownActive(false);
  }

  return (
    <CountdownContext.Provider
      value={{
        secondsAmount,
        isCountdownActive,
        hours,
        minutes,
        seconds,
        startCountdown,
        pauseCountdown,
        stopCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
