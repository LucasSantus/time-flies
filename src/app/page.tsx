"use client";

import { Countdown } from "@/components/Countdown";
import { ThemeSelector } from "@/components/ThemeSelector";

export default function Home() {
  return (
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
  );
}
