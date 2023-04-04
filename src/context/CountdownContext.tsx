import { CountdownContextData, ITimesType } from "@/components/Countdown/types/Countdown";
import { formatTime } from "@/utils/formatTime";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 25 * 60;

export const CountdownContext = createContext<CountdownContextData>({} as CountdownContextData);

export const CountdownProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS);
  const [isActive, setIsActive] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isActive && secondsAmount > 0) {
      intervalId = setInterval(() => {
        setSecondsAmount((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, secondsAmount]);

  const [hourLeft, hourRight] = formatTime(Math.floor(secondsAmount / 3600)).split("");
  const [minuteLeft, minuteRight] = formatTime(Math.floor((secondsAmount % 3600) / 60)).split("");
  const [secondLeft, secondRight] = formatTime(secondsAmount % 60).split("");

  const times: ITimesType = {
    hourLeft,
    hourRight,
    minuteLeft,
    minuteRight,
    secondLeft,
    secondRight,
  };

  function startCountdown(time: number) {
    setSecondsAmount(time);
    setIsActive(true);
    setIsRunning(true);
  }

  function changeCountdown() {
    setIsActive((current) => !current);
  }

  function resetCountdown() {
    setSecondsAmount(COUNTDOWN_INITIAL_TIME_IN_SECONDS);
    setIsActive(false);
    setIsRunning(false);
  }

  return (
    <CountdownContext.Provider
      value={{
        secondsAmount,
        isActive,
        isRunning,
        times,
        startCountdown,
        changeCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
