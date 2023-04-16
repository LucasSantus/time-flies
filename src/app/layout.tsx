"use client";

import { Contexts } from "@/context";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "./../assets/css/globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en-US">
      <head />
      <body className="h-screen w-screen">
        <Contexts>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          {children}
        </Contexts>
      </body>
    </html>
  );
}
