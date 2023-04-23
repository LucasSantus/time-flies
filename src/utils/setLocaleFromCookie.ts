import { KEY_LOCALE_COOKIE } from "@/contants/globals";
import { setCookieInBrowser } from "./cookies";

export function setLocaleFromCookie(locale: string) {
  setCookieInBrowser(KEY_LOCALE_COOKIE, locale);
}
