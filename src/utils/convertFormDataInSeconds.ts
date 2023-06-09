import { CountdownFormData } from "@/validation/countdown-registration";

export function convertFormDataInSeconds(formData: CountdownFormData): number {
  const {
    hourLeft,
    hourRight,
    minuteLeft,
    minuteRight,
    secondLeft,
    secondRight,
  } = formData;

  const hour = Number(`${hourLeft}${hourRight}`) * 60 * 60;
  const minute = Number(`${minuteLeft}${minuteRight}`) * 60;
  const second = Number(`${secondLeft}${secondRight}`);

  return hour + minute + second;
}
