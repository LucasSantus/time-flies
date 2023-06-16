import { setCookie } from "nookies";

/**
 * Sets a cookie in the browser.
 * @param key The key of the cookie.
 * @param value The value of the cookie.
 */
export function setCookieToBrowser(key: string, value: string) {
  setCookie(null, key, value, {
    maxAge: 12 * 30 * 24 * 60 * 60 * 10,
    path: "/",
  });
}
