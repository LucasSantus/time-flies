import { z } from "zod";

export const countdownFormSchema = z
  .object({
    hourLeft: z.coerce.number(),
    hourRight: z.coerce.number(),
    minuteLeft: z.coerce.number(),
    minuteRight: z.coerce.number(),
    secondLeft: z.coerce.number(),
    secondRight: z.coerce.number(),
  })
  .refine(({ hourLeft, hourRight }) => {
    const hour = Number(`${hourLeft}${hourRight}`);
    return hour >= 0 && hour <= 23;
  }, "Horário inválido!")
  .refine(({ minuteLeft, minuteRight }) => {
    const minute = Number(`${minuteLeft}${minuteRight}`);
    return minute >= 0 && minute <= 59;
  }, "Minuto inválido!")
  .refine(({ secondLeft, secondRight }) => {
    const second = Number(`${secondLeft}${secondRight}`);
    return second >= 0 && second <= 59;
  }, "Segundo inválido!");

export type CountdownFormData = z.infer<typeof countdownFormSchema>;
