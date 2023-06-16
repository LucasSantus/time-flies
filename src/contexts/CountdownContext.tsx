import { DEFAULT_TIME } from "@/constants/globals";
import { CountdownContextData } from "@/types/CountdownContextData";
import { ISeparatedTimes } from "@/types/SeparatedTimes";
import { formatTime } from "@/utils/formatTime";
import { getTimeFromCookie } from "@/utils/getTimeFromCookie";
import { setTimeFromCookie } from "@/utils/setTimeFromCookie";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

export const CountdownContext = createContext({} as CountdownContextData);

export const CountdownProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [secondsAmount, setSecondsAmount] = useState(DEFAULT_TIME);
  const [isActive, setIsActive] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setSecondsAmount(getTimeFromCookie());
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && secondsAmount > 0) {
      interval = setInterval(() => {
        setSecondsAmount((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    if (secondsAmount === 0) {
      setSecondsAmount(getTimeFromCookie());
      setIsFinished(true);
      setIsRunning(false);
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, secondsAmount]);

  const [hourLeft, hourRight] = formatTime(
    Math.floor(secondsAmount / 3600)
  ).split("");

  const [minuteLeft, minuteRight] = formatTime(
    Math.floor((secondsAmount % 3600) / 60)
  ).split("");

  const [secondLeft, secondRight] = formatTime(secondsAmount % 60).split("");

  const times: ISeparatedTimes = {
    hourLeft,
    hourRight,
    minuteLeft,
    minuteRight,
    secondLeft,
    secondRight,
  };

  function startCountdown() {
    setIsActive(true);
    setIsRunning(true);
    setIsFinished(false);
  }

  function changeCountdown() {
    setIsActive((current) => !current);
  }

  function resetCountdown() {
    setSecondsAmount(getTimeFromCookie());
    setIsActive(false);
    setIsRunning(false);
    setIsFinished(false);
  }

  function setTimeInSeconds(time: number) {
    setTimeFromCookie(time);
    setSecondsAmount(time);
  }

  return (
    <CountdownContext.Provider
      value={{
        secondsAmount,
        isActive,
        isRunning,
        isFinished,
        times,
        startCountdown,
        changeCountdown,
        resetCountdown,
        setTimeInSeconds,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
