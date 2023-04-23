import { IThemeTypes } from "@/types/Themes";
import { useCallback } from "react";
import { useTheme } from "./useTheme";

export const useThemeMode = () => {
  const { theme, setTheme } = useTheme();

  const setThemeMode = useCallback(
    (theme: IThemeTypes["theme"]) => {
      setTheme(theme);
    },
    [setTheme],
  );

  const getThemeMode = useCallback((): IThemeTypes["theme"] => {
    return theme as IThemeTypes["theme"];
  }, [theme]);

  return { setThemeMode, getThemeMode };
};
