import { ISeparatedTimes } from "./SeparatedTimes";

export interface CountdownContextData {
  secondsAmount: number;
  isActive: boolean;
  isRunning: boolean;
  times: ISeparatedTimes;
  startCountdown: () => void;
  changeCountdown: () => void;
  resetCountdown: () => void;
  setTimeInSeconds: (time: number) => void;
}
