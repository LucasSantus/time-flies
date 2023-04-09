import { Locale } from "@/types/Locale";

export interface GeneralTranslations {
  start: string;
  interrupt: string;
  reset: string;
  continue: string;
}

export const generalTranslations: Record<Locale, GeneralTranslations> = {
  "pt-BR": {
    start: "Começar",
    interrupt: "Interromper",
    reset: "Resetar",
    continue: "Continuar",
  },
  "en-US": {
    start: "To Start",
    interrupt: "Interrupt",
    reset: "Reset",
    continue: "Continue",
  },
};
