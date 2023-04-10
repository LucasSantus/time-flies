import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import { Context, useContext } from "react";

export const useLocale = (): LocaleContextType => {
  return useContext(LocaleContext as Context<LocaleContextType>);
};
