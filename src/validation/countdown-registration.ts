import { z } from "zod";

export const countdownFormSchema = z.object({
  hourLeft: z.coerce
    .number()
    .min(0, "O campo hour left não pode ser menor que 0")
    .max(2, "O campo hour left não pode ser maior que 2"),
  hourRight: z.coerce
    .number()
    .min(0, "O campo hour right não pode ser menor que 0")
    .max(3, "O campo hour right não pode ser maior que 3"),
  minuteLeft: z.coerce
    .number()
    .min(0, "O campo minute left não pode ser menor que 0")
    .max(5, "O campo minute left não pode ser maior que 5"),
  minuteRight: z.coerce
    .number()
    .min(0, "O campo minute right não pode ser menor que 0")
    .max(9, "O campo minute right não pode ser maior que 9"),
  secondLeft: z.coerce
    .number()
    .min(0, "O campo second left não pode ser menor que 0")
    .max(5, "O campo second left não pode ser maior que 5"),
  secondRight: z.coerce
    .number()
    .min(0, "O campo second right não pode ser menor que 0")
    .max(9, "O campo second right não pode ser maior que 9"),
});

export type CountdownFormData = z.infer<typeof countdownFormSchema>;
