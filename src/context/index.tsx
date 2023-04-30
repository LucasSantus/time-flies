"use client";

import { AnimatePresence } from "framer-motion";
import React, { PropsWithChildren } from "react";
import { CountdownProvider } from "./CountdownContext";
import { ThemeProvider } from "./ThemeContext";

export const Contexts: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <CountdownProvider>
        <AnimatePresence>{children}</AnimatePresence>
      </CountdownProvider>
    </ThemeProvider>
  );
};
