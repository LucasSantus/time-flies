import { ITimeInSecondsType } from "./TimeInSeconds";
import { ITimesType } from "./Times";

export interface CountdownContextData {
  secondsAmount: number;
  isActive: boolean;
  isRunning: boolean;
  times: ITimesType;
  separateTime: ITimeInSecondsType;
  startCountdown: () => void;
  changeCountdown: () => void;
  resetCountdown: () => void;
  setTimeInSeconds: (time: number) => void;
}
