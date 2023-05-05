import { ThemeContext } from "@/context/ThemeContext";
import { ITheme } from "@/types/Themes";
import { useCallback, useContext } from "react";

const useTheme = () => useContext(ThemeContext);

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
