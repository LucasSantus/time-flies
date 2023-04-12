"use client";

import React, { PropsWithChildren } from "react";
import { CountdownProvider } from "./CountdownContext";
import { LocaleProvider } from "./LocaleContext";
import { ThemeContextWrapper } from "./ThemeContext";
import { AnimatePresence } from "framer-motion";

export const Contexts: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AnimatePresence>
      <LocaleProvider>
        <ThemeContextWrapper>
          <CountdownProvider>{children}</CountdownProvider>
        </ThemeContextWrapper>
      </LocaleProvider>
    </AnimatePresence>
  );
};
