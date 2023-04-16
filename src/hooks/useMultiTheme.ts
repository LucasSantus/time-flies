"use client";

import { ITheme } from "@/contants/themes";
import { MultiThemeContext } from "@/context/MultiThemeContext.";
import { useContext } from "react";

export const useSelectedMultiTheme = () => useContext(MultiThemeContext);

export const useMultiTheme = (): ITheme => {
  const { theme } = useSelectedMultiTheme();
  return { ...theme };
};
