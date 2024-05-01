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
  finishedCountdown: () => void;
  setTimeInSeconds: (time: number) => void;
}

interface CountdownData {
  isActive: boolean;
  isRunning: boolean;
  isFinished: boolean;
  secondsAmount: number;
  startedSecondsAmount: number;
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
    startedSecondsAmount: DEFAULT_TIME,
  };

  const [countdownOnStorage, setCountdownOnStorage] =
    useLocalStorage<CountdownData>(KEY_COUNTDOWN_LOCAL_STORAGE, initialValues);

  const [countdown, setCountdown] = useState<CountdownData>(countdownOnStorage);

  function startCountdown() {
    setCountdown((current) => ({
      ...current,
      isActive: true,
      isRunning: true,
      isFinished: false,
    }));
  }

  function changeCountdown() {
    setCountdown((current) => ({
      ...current,
      isActive: !current.isActive,
    }));
  }

  function resetCountdown() {
    setCountdown(({ startedSecondsAmount }) => ({
      ...initialValues,
      secondsAmount: startedSecondsAmount,
      startedSecondsAmount,
    }));

    setCountdownOnStorage(countdown);
  }

  function finishedCountdown() {
    const finishedValues: CountdownData = {
      ...initialValues,
      secondsAmount: countdown?.startedSecondsAmount ?? DEFAULT_TIME,
    };

    setCountdownOnStorage(finishedValues);
  }

  function setTimeInSeconds(time: number) {
    // setSecondsAmount(time);

    setCountdown(() => ({
      ...initialValues,
      secondsAmount: time,
      startedSecondsAmount: time,
    }));

    setCountdownOnStorage(countdown);
  }

  // show message of user exit page on countdown
  useEffect(() => {
    if (countdown.isActive) {
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
  }, [countdown.isActive]);

  // logic of countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (countdown.isActive && countdown.secondsAmount > 0) {
      interval = setInterval(() => {
        setCountdown((current) => ({
          ...current,
          secondsAmount: current.secondsAmount - 1,
        }));

        setCountdownOnStorage(countdown);
      }, 1000);
    }

    if (countdown.secondsAmount === 0) {
      setCountdown(({ startedSecondsAmount }) => ({
        isActive: false,
        isRunning: false,
        secondsAmount: startedSecondsAmount,
        isFinished: true,
        startedSecondsAmount,
      }));

      setCountdownOnStorage(countdown);
    }

    return () => clearInterval(interval);
  }, [countdown.isActive, countdown.secondsAmount]);

  // sound in finished project
  useEffect(() => {
    if (countdown.isFinished) {
      const sound = new Audio("/sounds/short-sound.mp3");
      sound.addEventListener("canplaythrough", () => {
        sound.play();
      });
    }
  }, [countdown.isFinished]);

  const [hourLeft, hourRight] = formatTime(
    Math.floor(countdown.secondsAmount / 3600),
  ).split("");

  const [minuteLeft, minuteRight] = formatTime(
    Math.floor((countdown.secondsAmount % 3600) / 60),
  ).split("");

  const [secondLeft, secondRight] = formatTime(
    countdown.secondsAmount % 60,
  ).split("");

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
        secondsAmount: countdown.secondsAmount,
        isActive: countdown.isActive,
        isRunning: countdown.isRunning,
        isFinished: countdown.isFinished,
        times,
        startCountdown,
        changeCountdown,
        resetCountdown,
        finishedCountdown,
        setTimeInSeconds,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
