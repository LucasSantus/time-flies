import { formatNumberToSeparatedTimes } from "@/utils/formatNumberToSeparatedTimes";
import { z } from "zod";

const MIN_VALUE = 0;
const MIN_MESSAGE = "Insira valor maior que 0";

const MAX_VALUE = 9;
const MAX_MESSAGE = "Insira valor menor que 9";

export const countdownFormSchema = z
  .object({
    hourLeft: z.coerce
      .number()
      .min(MIN_VALUE, MIN_MESSAGE)
      .max(MAX_VALUE, MAX_MESSAGE),
    hourRight: z.coerce
      .number()
      .min(MIN_VALUE, MIN_MESSAGE)
      .max(MAX_VALUE, MAX_MESSAGE),
    minuteLeft: z.coerce
      .number()
      .min(MIN_VALUE, MIN_MESSAGE)
      .max(MAX_VALUE, MAX_MESSAGE),
    minuteRight: z.coerce
      .number()
      .min(MIN_VALUE, MIN_MESSAGE)
      .max(MAX_VALUE, MAX_MESSAGE),
    secondLeft: z.coerce
      .number()
      .min(MIN_VALUE, MIN_MESSAGE)
      .max(MAX_VALUE, MAX_MESSAGE),
    secondRight: z.coerce
      .number()
      .min(MIN_VALUE, MIN_MESSAGE)
      .max(MAX_VALUE, MAX_MESSAGE),
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
