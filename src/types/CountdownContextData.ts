import { ISeparatedTimes } from "./SeparatedTimes";
import { ITimeInSecondsType } from "./TimeInSeconds";

export interface CountdownContextData {
  secondsAmount: number;
  isActive: boolean;
  isRunning: boolean;
  times: ISeparatedTimes;
  separateTime: ITimeInSecondsType;
  startCountdown: () => void;
  changeCountdown: () => void;
  resetCountdown: () => void;
  setTimeInSeconds: (time: number) => void;
}
