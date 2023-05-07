import { KEY_TIME_COOKIE } from "@/contants/globals";
import { setCookieInBrowser } from "./cookies";

export function setTimeFromCookie(time: number) {
  setCookieInBrowser(KEY_TIME_COOKIE, time.toString());
}
