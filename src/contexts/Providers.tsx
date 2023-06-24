"use client";

import { ThemeProvider } from "next-themes";
import { FC, PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import { CountdownProvider } from "./CountdownContext";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      enableColorScheme={false}
      disableTransitionOnChange
      defaultTheme="system"
      enableSystem
    >
      <CountdownProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {children}
      </CountdownProvider>
    </ThemeProvider>
  );
};
