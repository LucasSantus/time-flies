"use client";

import { Ban } from "lucide-react";

export function NoScript(): JSX.Element {
  return (
    <noscript>
      <style type="text/css">
        {`
        * {
          overflow: hidden;
          margin: 0;
          padding: 0;
        }
        #root {
          display: none;
        }
      `}
      </style>
      <div className="grid h-screen w-screen scroll-smooth bg-foreground text-background antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center gap-5 p-6 text-center">
          <Ban className="size-12" />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
            Ative o Javascript
          </h1>
          <p className="mx-auto max-w-prose text-muted-foreground md:text-xl/relaxed">
            Este síte requer JavaScript para funcionar corretamente. Por favor,
            ative o JavaScript no seu browser e atualize a página.
          </p>
        </div>
      </div>
    </noscript>
  );
}
