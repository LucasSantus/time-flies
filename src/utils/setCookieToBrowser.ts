import { parseCookies } from "nookies";

/**
 * Retrieves the value of a cookie from the browser.
 * @param key The key of the cookie.
 * @returns The value of the cookie, or undefined if the cookie is not found.
 */
export function getCookieToBrowser(key: string) {
  const cookies = parseCookies();
  return cookies[key];
}
