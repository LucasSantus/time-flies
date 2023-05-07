import { CountdownFormData } from "@/validation/countdown-registration";

export interface ICountdownForm {
  label: string;
  attribute: keyof CountdownFormData;
}
