import { z } from "zod";

export const countdownFormSchema = z.object({
  hours: z.coerce
    .number()
    .min(0, "O campo Horas não pode ser menor que 1")
    .max(24, "O campo Horas não pode ser maior que 24"),
  minutes: z.coerce
    .number()
    .min(0, "O campo Minutos não pode ser menor que 1")
    .max(60, "O campo Minutos não pode ser maior que 60"),
  seconds: z.coerce
    .number()
    .min(0, "O campo Segundos não pode ser menor que 1")
    .max(60, "O campo Segundos não pode ser maior que 60"),
});

export type CountdownFormData = z.infer<typeof countdownFormSchema>;
