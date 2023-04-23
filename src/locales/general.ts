export type LocaleMessages = {
  [key: string]: string;
};

export type Locale = "pt-BR" | "en-US";

export interface Translations {
  portuguese: string;
  english: string;
  start: string;
  interrupt: string;
  reset: string;
  continue: string;
  settings: string;
  save: string;
  editCountdown: string;
  languages: string;
  selectThemes: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const generalTranslations: Record<Locale, Translations> = {
  "pt-BR": {
    portuguese: "Português",
    english: "Inglês",
    start: "Começar",
    interrupt: "Interromper",
    reset: "Resetar",
    continue: "Continuar",
    settings: "Configurações",
    save: "Salvar",
    editCountdown: "Editar Contagem",
    languages: "Linguagens",
    selectThemes: "Seletor de Temas",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos",
  },
  "en-US": {
    portuguese: "Portuguese",
    english: "English",
    start: "To start",
    interrupt: "Interrupt",
    reset: "Reset",
    continue: "Continue",
    settings: "Settings",
    save: "Save",
    editCountdown: "Edit Countdown",
    languages: "Languages",
    selectThemes: "Theme Chooser",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
  },
};

export default generalTranslations;
