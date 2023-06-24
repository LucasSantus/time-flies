import { KEY_DATA_COOKIE } from "@/constants/globals";
import { DataCookie } from "@/types/DataCookie";
import { setCookieToBrowser } from "./getCookieToBrowser";

/**
 * Sets the data object in a cookie.
 * @param data The data object to be stored in the cookie.
 *             This should be an object conforming to the DataCookie interface.
 */
export function setDataFromCookie(data: DataCookie) {
  setCookieToBrowser(KEY_DATA_COOKIE, JSON.stringify(data));
}
