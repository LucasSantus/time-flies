import { ITimeInSecondsType } from "@/types/TimeInSeconds";

export function convertTimeInSeconds(time: ITimeInSecondsType) {
  const { hours, minutes, seconds } = time;

  const hour = hours * 60 * 60;
  const minute = minutes * 60;
  const second = seconds;

  return hour + minute + second;
}
