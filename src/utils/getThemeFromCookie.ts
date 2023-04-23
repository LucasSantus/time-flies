import { DEFAULT_THEME, KEY_THEME_COOKIE } from "@/contants/globals";
import { IThemeTypes } from "@/types/Themes";
import { getCookieInBrowser } from "./cookies";

export function getThemeFromCookie(): IThemeTypes["theme"] {
  const theme = getCookieInBrowser(KEY_THEME_COOKIE) as IThemeTypes["theme"];

  if (theme) return theme;

  return DEFAULT_THEME;
}
