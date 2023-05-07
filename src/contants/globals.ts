import { ICountdownForm } from "@/types/CountdownForm";

export const TRANSITION_DURATION = 0.7;

// KEYS OF COOKIES
export const KEY_TIME_COOKIE = "time";

export const KEY_THEME_COOKIE = "theme";

export const KEY_LOCALE_COOKIE = "locale";

// DEFAULT VALUES
export const DEFAULT_LOCALE = "en-US";

export const DEFAULT_THEME = "dark";

export const DEFAULT_TIME = 60 * 25;

export const COUNTDOWN_FORM: ICountdownForm[] = [
  {
    label: "Horas",
    attribute: "hours",
  },
  {
    label: "Minutos",
    attribute: "minutes",
  },
  {
    label: "Segundos",
    attribute: "seconds",
  },
];
