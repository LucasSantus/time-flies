import { IThemeContextProps, IThemeTypes } from "@/types/Theme";
import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";

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

export const ThemeContextWrapper: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<IThemeTypes["theme"]>(getTheme);

  const themesForSelect = ["dark", "light"];

  const rawSetTheme = (rawTheme: IThemeTypes["theme"]) => {
    const root = window.document.documentElement.classList;
    themesForSelect.forEach((type) => root.remove(type));
    root.add(rawTheme);
    localStorage.setItem("theme", rawTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [rawSetTheme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
