import { parseCookies, setCookie } from "nookies";

export function setCookieInBrowser(key: string, value: string) {
  setCookie(null, key, value, {
    maxAge: 12 * 30 * 24 * 60 * 60,
    path: "/",
  });
}

export function getCookieInBrowser(key: string) {
  const cookies = parseCookies();
  return cookies[key];
}
