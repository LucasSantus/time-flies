import generalTranslations, { Locale } from "@/locales/general";
import { parseCookies } from "nookies";

export function getLocaleFromCookie(): Locale {
  const cookies = parseCookies();
  const locale = cookies.locale;

  if (locale && generalTranslations[locale as Locale]) {
    return locale as Locale;
  }

  return "pt-BR";
}
