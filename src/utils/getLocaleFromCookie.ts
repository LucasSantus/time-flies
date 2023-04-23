import { DEFAULT_LOCALE, KEY_LOCALE_COOKIE } from "@/contants/globals";
import generalTranslations, { Locale } from "@/locales/general";
import { getCookieInBrowser } from "./cookies";

export function getLocaleFromCookie(): Locale {
  const locale = getCookieInBrowser(KEY_LOCALE_COOKIE);

  if (locale && generalTranslations[locale as Locale]) {
    return locale as Locale;
  }

  return DEFAULT_LOCALE;
}
