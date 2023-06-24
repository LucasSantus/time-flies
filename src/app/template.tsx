"use client";

import { CountdownProvider } from "@/contexts/CountdownContext";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="dark"
      enableColorScheme={false}
      disableTransitionOnChange
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
}
