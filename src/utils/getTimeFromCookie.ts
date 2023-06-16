import { DEFAULT_TIME, KEY_TIME_COOKIE } from "@/constants/globals";
import { getCookieToBrowser } from "./setCookieToBrowser";

export function getTimeFromCookie(): number {
  const time = getCookieToBrowser(KEY_TIME_COOKIE);

  if (time) return Number(time);

  return DEFAULT_TIME;
}
