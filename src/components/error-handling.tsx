"use client";

import { Button } from "@/components/ui/button";
import { ErrorHandlingData } from "@/types/error-handling";
import { useEffect } from "react";

export function ErrorHandling({ error, reset }: ErrorHandlingData) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <h2 className="text-center text-sm font-medium text-red-600">
        Ocorreu um erro inesperado!
      </h2>
      <Button onClick={() => reset()}>Tentar Novamente</Button>
    </div>
  );
}
