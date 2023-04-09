import { Locale } from "@/types/Locale";
import { NextRouter } from "next/router";

declare module "next/router" {
  function useRouter(): NextRouter & {
    locale: Locale;
    defaultLocale: Locale;
    locales: Locale[];
  };
}
