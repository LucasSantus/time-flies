"use client";

import { Countdown } from "@/components/Countdown";
import { SelectorTheme } from "@/components/SelectorTheme";
import "react-toastify/dist/ReactToastify.min.css";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col bg-slate-800 dark:bg-custom-gray-800">
      <div className="flex justify-end">
        <div className="m-5 flex gap-2">
          <SelectorTheme />
        </div>
      </div>

      <div className="flex h-screen w-screen items-center justify-center">
        <Countdown />
      </div>
    </div>
  );
}
