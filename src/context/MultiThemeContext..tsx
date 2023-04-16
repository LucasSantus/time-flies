"use client";

import { DEFAULT_THEME, ITheme } from "@/contants/themes";
import { getTheme, getThemeNameFromCookie, setThemeNameFromCookie } from "@/utils/themes";
import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";

interface MultiThemeContextProps {
  theme: ITheme;
  setSelectedTheme: (themeName: string) => void;
}

export const MultiThemeContext = createContext<MultiThemeContextProps>({
  theme: DEFAULT_THEME,
  setSelectedTheme: () => {},
});

export const MultiThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [themeName, setThemeName] = useState(getThemeNameFromCookie());
  const [theme, setTheme] = useState(getTheme(themeName));

  useEffect(() => {
    setThemeNameFromCookie(themeName);
    setTheme(getTheme(themeName));
  }, [themeName]);

  const setSelectedTheme = (selectedTheme: string) => {
    setThemeName(selectedTheme);
  };

  return <MultiThemeContext.Provider value={{ theme, setSelectedTheme }}>{children}</MultiThemeContext.Provider>;
};
