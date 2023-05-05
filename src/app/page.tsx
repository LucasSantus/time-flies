"use client";

import { Countdown } from "@/components/Countdown";
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
      <div className="flex flex-col">
        {/* <div className="flex justify-end">
          <div className="m-5 flex gap-2">
            <ThemeSelector />
          </div>
        </div> */}

        {/* TODO: Centralizar corretamente o componente abaixo */}
        <div className="flex items-center justify-center">
          <Countdown />
        </div>
      </div>
    </Contexts>
  );
}
