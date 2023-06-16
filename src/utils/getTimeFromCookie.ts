import { DEFAULT_TIME, KEY_TIME_COOKIE } from "@/constants/globals";
import { getCookieToBrowser } from "./setCookieToBrowser";

/**
 * Retrieves the time value from a cookie.
 * @returns The time value from the cookie as a number, or the default time value if the cookie is not found.
 */
export function getTimeFromCookie(): number {
  const time = getCookieToBrowser(KEY_TIME_COOKIE);

  if (time) return Number(time);

  return DEFAULT_TIME;
}
