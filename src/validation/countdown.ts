import { formatNumberToSeparatedTimes } from "@/utils/formatNumberToSeparatedTimes";
import { z } from "zod";

export const countdownFormSchema = z
  .object({
    hourLeft: z.coerce
      .number()
      .min(0, "MIN_FORM_VALUE")
      .max(2, "MAX_FORM_VALUE"),
    hourRight: z.coerce
      .number()
      .min(0, "MIN_FORM_VALUE")
      .max(9, "MAX_FORM_VALUE"),
    minuteLeft: z.coerce
      .number()
      .min(0, "MIN_FORM_VALUE")
      .max(5, "MAX_FORM_VALUE"),
    minuteRight: z.coerce
      .number()
      .min(0, "MIN_FORM_VALUE")
      .max(9, "MAX_FORM_VALUE"),
    secondLeft: z.coerce
      .number()
      .min(0, "MIN_FORM_VALUE")
      .max(5, "MAX_FORM_VALUE"),
    secondRight: z.coerce
      .number()
      .min(0, "MIN_FORM_VALUE")
      .max(9, "MAX_FORM_VALUE"),
  })
  .refine(
    ({
      hourLeft,
      hourRight,
      minuteLeft,
      minuteRight,
      secondLeft,
      secondRight,
    }) => {
      const hour = formatNumberToSeparatedTimes(hourLeft, hourRight);
      const minute = formatNumberToSeparatedTimes(minuteLeft, minuteRight);
      const second = formatNumberToSeparatedTimes(secondLeft, secondRight);

      const timeIsValid = hour === 0 && minute === 0 && second === 0;

      return !timeIsValid;
    },
    "Insira um valor para contabilizar a contagem!",
  )
  .refine(({ hourLeft, hourRight }) => {
    const hour = formatNumberToSeparatedTimes(hourLeft, hourRight);
    return hour >= 0 && hour <= 29;
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
