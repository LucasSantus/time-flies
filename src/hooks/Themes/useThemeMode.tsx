import { ITheme } from "@/types/Themes";
import { useCallback } from "react";
import { useTheme } from "./useTheme";

export const useThemeMode = () => {
  const { title, setTheme } = useTheme();

  const setThemeMode = useCallback(
    (theme: ITheme["title"]) => {
      setTheme(theme);
    },
    [setTheme],
  );

  const getThemeMode = useCallback((): ITheme["title"] => {
    return title as ITheme["title"];
  }, [title]);

  return { setThemeMode, getThemeMode };
};
