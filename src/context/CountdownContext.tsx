import { DEFAULT_TIME } from "@/contants/globals";
import { CountdownContextData } from "@/types/CountdownContextData";
import { ITimeInSecondsType } from "@/types/TimeInSeconds";
import { ITimesType } from "@/types/Times";
import { formatTime } from "@/utils/formatTime";
import { getTimeFromCookie } from "@/utils/getTimeFromCookie";
import { setTimeFromCookie } from "@/utils/setTimeFromCookie";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

export const CountdownContext = createContext({} as CountdownContextData);

export const CountdownProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [secondsAmount, setSecondsAmount] = useState(DEFAULT_TIME);
  const [isActive, setIsActive] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setSecondsAmount(getTimeFromCookie());
  }, []);

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

  const separateTime: ITimeInSecondsType = {
    hours: Number(`${hourLeft}${hourRight}`),
    minutes: Number(`${minuteLeft}${minuteRight}`),
    seconds: Number(`${secondLeft}${secondRight}`),
  };

  function startCountdown() {
    setIsActive(true);
    setIsRunning(true);
  }

  function changeCountdown() {
    setIsActive((current) => !current);
  }

  function resetCountdown() {
    setSecondsAmount(getTimeFromCookie());
    setIsActive(false);
    setIsRunning(false);
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
        times,
        separateTime,
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
