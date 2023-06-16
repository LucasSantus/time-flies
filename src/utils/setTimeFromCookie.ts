import { KEY_TIME_COOKIE } from "@/constants/globals";
import { setCookieToBrowser } from "./getCookieToBrowser";

export function setTimeFromCookie(time: number) {
  setCookieToBrowser(KEY_TIME_COOKIE, time.toString());
}
