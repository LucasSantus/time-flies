import { DEFAULT_THEME, KEY_THEME_COOKIE } from "@/contants/globals";
import { ITheme } from "@/types/Themes";
import { getCookieInBrowser } from "./cookies";

export function getThemeFromCookie(): ITheme["title"] {
  const theme = getCookieInBrowser(KEY_THEME_COOKIE) as ITheme["title"];

  if (theme) return theme;

  return DEFAULT_THEME;
}
