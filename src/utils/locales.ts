import { DEFAULT_LOCALE, KEY_LOCALE_COOKIE } from "@/contants/globals";
import generalTranslations, { Locale } from "@/locales/general";
import { getCookieInBrowser, setCookieInBrowser } from "./cookies";

export function setLocaleFromCookie(locale: string) {
  setCookieInBrowser(KEY_LOCALE_COOKIE, locale);
}

export function getLocaleFromCookie(): Locale {
  const locale = getCookieInBrowser(KEY_LOCALE_COOKIE);

  if (locale && generalTranslations[locale as Locale]) {
    return locale as Locale;
  }

  return DEFAULT_LOCALE;
}
