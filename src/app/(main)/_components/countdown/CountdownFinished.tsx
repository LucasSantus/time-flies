"use client";

import { Button } from "@/components/ui/button";
import { useCountdown } from "@/hooks/use-countdown";
import { BadgeCheck, Check } from "lucide-react";
import React from "react";

interface CountdownFinishedProps {}

export const CountdownFinished: React.FC<CountdownFinishedProps> = () => {
  const { isFinished } = useCountdown();

  // useEffect(() => {
  //   setIsOpenModal(isFinished);
  // }, [isFinished, setIsOpenModal]);

  return (
    <div className="flex flex-col items-center gap-3">
      <Check size={80} className="stroke-custom-green-500" />
      <span className="text-3xl font-medium text-slate-700 dark:font-normal dark:text-slate-50">
        Contagem Finalizada!
      </span>
      <span className="px-3 text-base font-normal text-slate-500 dark:text-slate-50">
        Opss... parece que acabou, que tal iniciar-mos uma nova contagem?
      </span>
      <Button
        variant="success"
        type="submit"
        icon={<BadgeCheck className="size-5" />}
        // onClick={() => setIsOpenModal(false)}
      >
        Fechar
      </Button>
    </div>
  );
};
