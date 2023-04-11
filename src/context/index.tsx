"use client";

import React, { PropsWithChildren } from "react";
import { CountdownProvider } from "./CountdownContext";
import { LocaleProvider } from "./LocaleContext";
import { ThemeContextWrapper } from "./ThemeContext";

export const Contexts: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <LocaleProvider>
      <ThemeContextWrapper>
        <CountdownProvider>{children}</CountdownProvider>
      </ThemeContextWrapper>
    </LocaleProvider>
  );
};
