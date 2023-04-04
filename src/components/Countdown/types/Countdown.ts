export interface ITimesType {
  hourLeft: string;
  hourRight: string;
  minuteLeft: string;
  minuteRight: string;
  secondLeft: string;
  secondRight: string;
}

export interface CountdownContextData {
  secondsAmount: number;
  isActive: boolean;
  isRunning: boolean;
  times: ITimesType;
  startCountdown: (time: number) => void;
  changeCountdown: () => void;
  resetCountdown: () => void;
}
