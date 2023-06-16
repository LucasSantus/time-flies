import { parseCookies } from "nookies";

export function getCookieToBrowser(key: string) {
  const cookies = parseCookies();
  return cookies[key];
}
