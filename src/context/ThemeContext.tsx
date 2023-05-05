import { ITheme, IThemeContextProps } from "@/types/Themes";
import { getThemeFromCookie } from "@/utils/getThemeFromCookie";
import { setThemeFromCookie } from "@/utils/setThemeFromCookie";
import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";

const defaultValue: IThemeContextProps = {
  title: "light" as ITheme["title"],
  setTheme: () => {},
};

export const ThemeContext = createContext(defaultValue as IThemeContextProps);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme["title"]>(getThemeFromCookie);

  const themesForSelect = ["dark", "light"];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rawSetTheme = (rawTheme: ITheme["title"]) => {
    const root = window.document.documentElement.classList;
    themesForSelect.forEach((type) => root.remove(type));
    root.add(rawTheme);

    setThemeFromCookie(rawTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [rawSetTheme, setTheme, theme]);

  return <ThemeContext.Provider value={{ title: theme, setTheme }}>{children}</ThemeContext.Provider>;
};
