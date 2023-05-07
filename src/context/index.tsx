"use client";

import { ThemeProvider } from "next-themes";
import React, { PropsWithChildren } from "react";
import { CountdownProvider } from "./CountdownContext";

export const Contexts: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="dark"
      enableColorScheme={false}
      disableTransitionOnChange
    >
      <CountdownProvider>{children}</CountdownProvider>
    </ThemeProvider>
  );
};
