import { DEFAULT_THEME, DEFAULT_THEME_NAME, KEY_THEME_COOKIE } from "@/contants/globals";
import { ITheme, themes } from "@/contants/themes";
import { getCookieInBrowser, setCookieInBrowser } from "./cookies";

export function setThemeNameFromCookie(theme: string) {
  setCookieInBrowser(KEY_THEME_COOKIE, theme);
}

export function getThemeNameFromCookie(): string {
  const theme = getCookieInBrowser(KEY_THEME_COOKIE);

  if (theme) return theme;

  return DEFAULT_THEME_NAME;
}

export function getTheme(name: string): ITheme {
  const theme = themes.find((_) => _.name === name);

  if (theme) return theme;

  return DEFAULT_THEME;
}
