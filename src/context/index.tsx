"use client";

import React, { PropsWithChildren } from "react";
import { CountdownProvider } from "./CountdownContext";
import { ThemeProvider } from "./ThemeContext";

export const Contexts: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <CountdownProvider>{children}</CountdownProvider>
    </ThemeProvider>
  );
};
