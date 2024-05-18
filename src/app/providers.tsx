"use client";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { FC, PropsWithChildren } from "react";
import { CountdownProvider } from "../contexts/countdown-context";
import { NoScript } from "./no-script";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <CountdownProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster duration={4000} richColors closeButton visibleToasts={9} />

        <NoScript />

        {children}
      </ThemeProvider>
    </CountdownProvider>
  );
};
