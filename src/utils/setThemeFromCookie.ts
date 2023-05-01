import { KEY_THEME_COOKIE } from "@/contants/globals";
import { setCookieInBrowser } from "./cookies";

export function setThemeFromCookie(theme: string) {
  setCookieInBrowser(KEY_THEME_COOKIE, theme);
}
