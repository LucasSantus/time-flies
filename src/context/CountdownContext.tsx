import { CountdownContextData } from "@/types/CountdownContextData";
import { ITimesType } from "@/types/Times";
import { KEY_TIME_COOKIE } from "@/utils/constants";
import { formatTime } from "@/utils/formatTime";
import { parseCookies, setCookie } from "nookies";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

export const CountdownContext = createContext<CountdownContextData>({} as CountdownContextData);

// Função para escrever os dados no cookie com a chave "time"
export function setTimeInCookie(key: string, time: number): void {
  setCookie(null, key, String(time));
}

const DEFAULT_TIME = 0;

/**
 * Lê o valor do tempo armazenado no cookie com a chave "time".
 * Se o cookie não existir ou não for um número válido, retorna o valor padrão 0.
 */
export function getTimeFromCookie(key: string): number {
  const cookies = parseCookies();
  const timeString = cookies[key];
  const time = timeString ? Number(timeString) : NaN;
  return isNaN(time) ? DEFAULT_TIME : time;
}

export const CountdownProvider: React.FC<PropsWithChildren> = ({ children }) => {
  if (!getTimeFromCookie(KEY_TIME_COOKIE)) setTimeInCookie(KEY_TIME_COOKIE, 60 * 25);

  const [secondsAmount, setSecondsAmount] = useState(getTimeFromCookie(KEY_TIME_COOKIE));
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

  function startCountdown() {
    setIsActive(true);
    setIsRunning(true);
  }

  function changeCountdown() {
    setIsActive((current) => !current);
  }

  function resetCountdown() {
    setSecondsAmount(getTimeFromCookie(KEY_TIME_COOKIE));
    setIsActive(false);
    setIsRunning(false);
  }

  function setTimeInSeconds(time: number) {
    setTimeInCookie(KEY_TIME_COOKIE, time);
    setSecondsAmount(time);
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
        setTimeInSeconds,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
