"use client";

import { DEFAULT_TIME, KEY_COUNTDOWN_LOCAL_STORAGE } from "@/constants/globals";
import { SeparatedTimesData } from "@/types/separated-times";
import { formatTime } from "@/utils/formatTime";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export interface CountdownContextData {
  secondsAmount: number;
  isActive: boolean;
  isRunning: boolean;
  isFinished: boolean;
  times: SeparatedTimesData;
  startCountdown: () => void;
  changeCountdown: () => void;
  resetCountdown: () => void;
  setTimeInSeconds: (time: number) => void;
}

interface CountdownData {
  isActive: boolean;
  isRunning: boolean;
  isFinished: boolean;
  secondsAmount: number;
}

export const CountdownContext = createContext({} as CountdownContextData);

export const CountdownProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const initialValues: CountdownData = {
    isActive: false,
    isFinished: false,
    isRunning: false,
    secondsAmount: DEFAULT_TIME,
  };

  const [countdownOnStorage, setCountdownOnStorage] =
    useLocalStorage<CountdownData>(KEY_COUNTDOWN_LOCAL_STORAGE, initialValues);

  const [secondsAmount, setSecondsAmount] = useState(
    countdownOnStorage.secondsAmount,
  );
  const [isActive, setIsActive] = useState(countdownOnStorage.isActive);
  const [isRunning, setIsRunning] = useState(countdownOnStorage.isRunning);
  const [isFinished, setIsFinished] = useState(countdownOnStorage.isFinished);

  // show message of user exit page on countdown
  useEffect(() => {
    if (isActive) {
      const handleUnload = (event: BeforeUnloadEvent) => {
        event.preventDefault();

        event.stopPropagation();
        event.returnValue = "";
      };

      window.addEventListener("beforeunload", handleUnload);

      return () => {
        window.removeEventListener("beforeunload", handleUnload);
      };
    }
  }, [isActive]);

  // sync data of cookies
  useEffect(() => {
    if (isActive || isRunning) {
      setCountdownOnStorage({
        isActive,
        isRunning,
        isFinished,
        secondsAmount,
      });
    }
  }, [isActive, isFinished, isRunning, secondsAmount]);

  // get data from cookies
  // useEffect(() => {
  //   const {
  //     isActive: isActiveCookie,
  //     isRunning: isRunningCookie,
  //     secondsAmount: secondsAmountCookie,
  //   } = getDataFromCookie();

  //   setIsActive(isActiveCookie);
  //   setIsRunning(isRunningCookie);
  //   setSecondsAmount(secondsAmountCookie);
  // }, []);

  // logic of countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && secondsAmount > 0) {
      interval = setInterval(() => {
        setSecondsAmount((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    if (secondsAmount === 0) {
      setCountdownOnStorage({
        ...initialValues,
        secondsAmount: countdownOnStorage.secondsAmount,
        isFinished: true,
      });
    }

    return () => clearInterval(interval);
  }, [isActive, secondsAmount]);

  // sound in finished project
  useEffect(() => {
    if (isFinished) {
      const sound = new Audio("/sounds/short-sound.mp3");
      sound.addEventListener("canplaythrough", () => {
        sound.play();
      });
    }
  }, [isFinished]);

  function startCountdown() {
    setIsActive(true);
    setIsRunning(true);
    setIsFinished(false);
  }

  function changeCountdown() {
    setIsActive((current) => !current);
  }

  function resetCountdown() {
    setSecondsAmount(countdownOnStorage.secondsAmount);
    setIsActive(false);
    setIsRunning(false);
    setIsFinished(false);

    setCountdownOnStorage({
      ...initialValues,
      secondsAmount: countdownOnStorage.secondsAmount,
    });
  }

  function setTimeInSeconds(time: number) {
    setSecondsAmount(time);

    setCountdownOnStorage({
      ...countdownOnStorage,
      secondsAmount: time,
    });
  }

  const [hourLeft, hourRight] = formatTime(
    Math.floor(secondsAmount / 3600),
  ).split("");

  const [minuteLeft, minuteRight] = formatTime(
    Math.floor((secondsAmount % 3600) / 60),
  ).split("");

  const [secondLeft, secondRight] = formatTime(secondsAmount % 60).split("");

  const times: SeparatedTimesData = {
    hourLeft: Number(hourLeft),
    hourRight: Number(hourRight),
    minuteLeft: Number(minuteLeft),
    minuteRight: Number(minuteRight),
    secondLeft: Number(secondLeft),
    secondRight: Number(secondRight),
  };

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
