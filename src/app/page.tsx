"use client";

import { Countdown } from "@/components/Countdown";
import { SelectLocale } from "@/components/SelectLocale";
import { Contexts } from "@/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Home() {
  return (
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

      <div className="fixed right-6 top-6">
        <SelectLocale />
      </div>

      <div className="flex h-full items-center justify-center">
        <Countdown />
      </div>
    </Contexts>
  );
}
