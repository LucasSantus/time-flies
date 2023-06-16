import { setCookie } from "nookies";

export function setCookieToBrowser(key: string, value: string) {
  setCookie(null, key, value, {
    maxAge: 12 * 30 * 24 * 60 * 60 * 10,
    path: "/",
  });
}
