"use client";

import React, { PropsWithChildren } from "react";
import { CountdownProvider } from "./CountdownContext";
import { LocaleProvider } from "./LocaleContext";

export const Contexts: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <LocaleProvider>
      <CountdownProvider>{children}</CountdownProvider>
    </LocaleProvider>
  );
};
