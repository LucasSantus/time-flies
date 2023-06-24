import { DEFAULT_TIME } from "@/constants/globals";
import { CountdownContextData } from "@/types/CountdownContextData";
import { ISeparatedTimes } from "@/types/SeparatedTimes";
import { formatTime } from "@/utils/formatTime";
import { getDataFromCookie } from "@/utils/getDataFromCookie";
import { getTimeFromCookie } from "@/utils/getTimeFromCookie";
import { setDataFromCookie } from "@/utils/setDataFromCookie";
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
      setDataFromCookie({
        isActive,
        isRunning,
        secondsAmount,
      });
    }
  }, [isActive, isFinished, isRunning, secondsAmount]);

  // get data from cookies
  useEffect(() => {
    const {
      isActive: isActiveCookie,
      isRunning: isRunningCookie,
      secondsAmount: secondsAmountCookie,
    } = getDataFromCookie();

    setIsActive(isActiveCookie);
    setIsRunning(isRunningCookie);
    setSecondsAmount(secondsAmountCookie);
  }, []);

  // logic of countdown
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
    setSecondsAmount(getTimeFromCookie());
    setIsActive(false);
    setIsRunning(false);
    setIsFinished(false);

    setDataFromCookie({
      isActive: false,
      isRunning: false,
      secondsAmount: getTimeFromCookie(),
    });
  }

  function setTimeInSeconds(time: number) {
    setTimeFromCookie(time);
    setSecondsAmount(time);
  }

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
