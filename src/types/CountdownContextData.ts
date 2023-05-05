import { ITimeInSecondsType } from "./TimeInSeconds";
import { ISeparatedTimes } from "./Times";

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
