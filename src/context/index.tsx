"use client";

import { AnimatePresence } from "framer-motion";
import React, { PropsWithChildren } from "react";
import { CountdownProvider } from "./CountdownContext";
import { LocaleProvider } from "./LocaleContext";
import { ThemeProvider } from "./ThemeContext";

export const Contexts: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <CountdownProvider>
          <AnimatePresence>{children}</AnimatePresence>
        </CountdownProvider>
      </ThemeProvider>
    </LocaleProvider>
  );
};
