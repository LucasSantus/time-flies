import generalTranslations, { Locale } from "@/locales/general";
import { getCookieInBrowser, setCookieInBrowser } from "./cookies";

export function setLocaleFromCookie(locale: string) {
  setCookieInBrowser("locale", locale);
}

export function getLocaleFromCookie(): Locale {
  const locale = getCookieInBrowser("locale");

  if (locale && generalTranslations[locale as Locale]) {
    return locale as Locale;
  }

  return "en-US";
}
