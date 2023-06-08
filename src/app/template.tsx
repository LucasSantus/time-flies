"use client";

import { Contexts } from "@/contexts";
import { ToastContainer } from "react-toastify";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
