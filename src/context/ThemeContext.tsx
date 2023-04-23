import { IThemeContextProps, IThemeTypes } from "@/types/Themes";
import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";

/**
 *
 * @returns
 */
const getTheme = (): IThemeTypes["theme"] => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("theme");
    if (typeof storedPrefs === "string") return storedPrefs as IThemeTypes["theme"];

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) return "dark";
  }

  return "light";
};

const defaultValue: IThemeContextProps = {
  theme: "light" as IThemeTypes["theme"],
  setTheme: () => {},
};

export const ThemeContext = createContext(defaultValue as IThemeContextProps);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<IThemeTypes["theme"]>(getTheme);

  const themesForSelect = ["dark", "light"];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rawSetTheme = (rawTheme: IThemeTypes["theme"]) => {
    const root = window.document.documentElement.classList;
    themesForSelect.forEach((type) => root.remove(type));
    root.add(rawTheme);
    
    localStorage.setItem("theme", rawTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [rawSetTheme, setTheme, theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
