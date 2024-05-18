import { CountdownFormData } from "@/validation/countdown";
import { formatNumberToSeparatedTimes } from "./formatNumberToSeparatedTimes";

/**
 * Converts countdown form data into seconds.
 * @param countdownFormData The countdown form data.
 * @returns The total value in seconds calculated from the form data.
 */
export function convertFormDataInSeconds(
  countdownFormData: CountdownFormData,
): number {
  const {
    hourLeft,
    hourRight,
    minuteLeft,
    minuteRight,
    secondLeft,
    secondRight,
  } = countdownFormData;

  const hour = formatNumberToSeparatedTimes(hourLeft, hourRight) * 60 * 60;
  const minute = formatNumberToSeparatedTimes(minuteLeft, minuteRight) * 60;
  const second = formatNumberToSeparatedTimes(secondLeft, secondRight);

  return hour + minute + second;
}
