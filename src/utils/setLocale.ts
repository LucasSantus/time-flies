import { setCookie } from "nookies";

export function setLocaleCookie(locale: string): void {
  setCookie(null, "locale", locale, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });

  window.location.reload();
}
