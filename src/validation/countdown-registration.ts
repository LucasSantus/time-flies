import {
  MAX_FORM_MESSAGE,
  MAX_FORM_VALUE,
  MIN_FORM_MESSAGE,
  MIN_FORM_VALUE,
} from "@/constants/globals";
import { formatNumberToSeparatedTimes } from "@/utils/formatNumberToSeparatedTimes";
import { z } from "zod";

export const countdownFormSchema = z
  .object({
    hourLeft: z.coerce
      .number()
      .min(MIN_FORM_VALUE, MIN_FORM_MESSAGE)
      .max(MAX_FORM_VALUE, MAX_FORM_MESSAGE),
    hourRight: z.coerce
      .number()
      .min(MIN_FORM_VALUE, MIN_FORM_MESSAGE)
      .max(MAX_FORM_VALUE, MAX_FORM_MESSAGE),
    minuteLeft: z.coerce
      .number()
      .min(MIN_FORM_VALUE, MIN_FORM_MESSAGE)
      .max(MAX_FORM_VALUE, MAX_FORM_MESSAGE),
    minuteRight: z.coerce
      .number()
      .min(MIN_FORM_VALUE, MIN_FORM_MESSAGE)
      .max(MAX_FORM_VALUE, MAX_FORM_MESSAGE),
    secondLeft: z.coerce
      .number()
      .min(MIN_FORM_VALUE, MIN_FORM_MESSAGE)
      .max(MAX_FORM_VALUE, MAX_FORM_MESSAGE),
    secondRight: z.coerce
      .number()
      .min(MIN_FORM_VALUE, MIN_FORM_MESSAGE)
      .max(MAX_FORM_VALUE, MAX_FORM_MESSAGE),
  })
  .refine(({ hourLeft, hourRight }) => {
    const hour = formatNumberToSeparatedTimes(hourLeft, hourRight);
    return hour >= 0 && hour <= 23;
  }, "As horas inseridas são inválidas!")
  .refine(({ minuteLeft, minuteRight }) => {
    const minute = formatNumberToSeparatedTimes(minuteLeft, minuteRight);
    return minute >= 0 && minute <= 59;
  }, "Os minutos inseridos são inválidos!")
  .refine(({ secondLeft, secondRight }) => {
    const second = formatNumberToSeparatedTimes(secondLeft, secondRight);
    return second >= 0 && second <= 59;
  }, "Os segundos inseridos são inválidos!");

export type CountdownFormData = z.infer<typeof countdownFormSchema>;
