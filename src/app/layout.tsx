"use client";

import { Contexts } from "@/context";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./../assets/css/globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en-US">
      <body className="h-screen w-screen bg-slate-800 dark:bg-custom-gray-800">
        <main>
          <Contexts>
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
          </Contexts>
        </main>
      </body>
    </html>
  );
}
