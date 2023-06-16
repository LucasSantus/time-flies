import { CountdownFormData } from "@/validation/countdown-registration";
import { formatNumberToSeparatedTimes } from "./formatNumberToSeparatedTimes";

export function convertFormDataInSeconds(formData: CountdownFormData): number {
  const {
    hourLeft,
    hourRight,
    minuteLeft,
    minuteRight,
    secondLeft,
    secondRight,
  } = formData;

  const hour = formatNumberToSeparatedTimes(hourLeft, hourRight) * 60 * 60;
  const minute = formatNumberToSeparatedTimes(minuteLeft, minuteRight) * 60;
  const second = formatNumberToSeparatedTimes(secondLeft, secondRight);

  return hour + minute + second;
}
