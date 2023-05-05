import { DEFAULT_TIME, KEY_TIME_COOKIE } from "@/contants/globals";
import { getCookieInBrowser } from "./cookies";

export function getTimeFromCookie(): number {
  const time = getCookieInBrowser(KEY_TIME_COOKIE);

  if (time) return Number(time);

  return DEFAULT_TIME;
}
