"use client";

import { Countdown } from "@/components/Countdown";
import { ThemeSelector } from "@/components/ThemeSelector";
import { Contexts } from "@/context";
import { ToastContainer } from "react-toastify";

export default function Home() {
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
      <div className="flex flex-col md:h-screen">
        <div className="flex sm:justify-end">
          <div className="m-5 flex gap-2">
            <ThemeSelector />
          </div>
        </div>

        <div className="flex h-full w-full items-start justify-center sm:items-center">
          <Countdown />
        </div>
      </div>
    </Contexts>
  );
}
