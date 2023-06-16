import { KEY_TIME_COOKIE } from "@/constants/globals";
import { setCookieToBrowser } from "./getCookieToBrowser";

/**
 * Sets the time value in a cookie.
 * @param time The time value to be stored in the cookie.
 */
export function setTimeFromCookie(time: number) {
  setCookieToBrowser(KEY_TIME_COOKIE, time.toString());
}
