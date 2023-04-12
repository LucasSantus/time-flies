import { z } from "zod";

export const createCountdownFormSchema = z.object({
  hours: z.coerce.number().min(0, "O campo hora não pode ser menor que 1").max(24),
  minutes: z.coerce.number().min(0, "O campo minuto não pode ser menor que 1").max(60),
  seconds: z.coerce.number().min(0, "O campo segundo não pode ser menor que 1").max(60),
});

export type CreateCountdownFormData = z.infer<typeof createCountdownFormSchema>;
