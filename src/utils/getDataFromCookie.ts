import { DEFAULT_TIME, KEY_DATA_COOKIE } from "@/constants/globals";
import { DataCookie } from "@/types/DataCookie";
import { getCookieToBrowser } from "./setCookieToBrowser";

/**
 * Retrieves the data object from a cookie.
 * @returns The data object from the cookie, or a default data object if the cookie is not found or invalid.
 */
export function getDataFromCookie(): DataCookie {
  const data = getCookieToBrowser(KEY_DATA_COOKIE);

  try {
    const parsedData = JSON.parse(data) as DataCookie;
    return parsedData;
  } catch (error) {
    console.log(error);
    return {
      isActive: false,
      isRunning: false,
      secondsAmount: DEFAULT_TIME,
    };
  }
}
