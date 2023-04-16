"use client";

import { AnimatePresence } from "framer-motion";
import React, { PropsWithChildren } from "react";
import { CountdownProvider } from "./CountdownContext";
import { LocaleProvider } from "./LocaleContext";
import { MultiThemeProvider } from "./MultiThemeContext.";

export const Contexts: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AnimatePresence>
      <LocaleProvider>
        <MultiThemeProvider>
          <CountdownProvider>{children}</CountdownProvider>
        </MultiThemeProvider>
      </LocaleProvider>
    </AnimatePresence>
  );
};
