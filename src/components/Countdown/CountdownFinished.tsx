"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { useModal } from "@/hooks/useModal";
import { easeInOutAnimationVerticalDislocate } from "@/utils/animation/easeInOutAnimationVerticalDislocate";
import { BadgeCheck, Check } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "../Button";

interface CountdownFinishedProps {}

export const CountdownFinished: React.FC<CountdownFinishedProps> = () => {
  const { isFinished } = useCountdown();

  const { setIsOpen: setIsOpenModal } = useModal();

  useEffect(() => {
    setIsOpenModal(isFinished);
  }, [isFinished, setIsOpenModal]);

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
        animation={easeInOutAnimationVerticalDislocate({
          delay: 0.7,
        })}
        type="submit"
        onClick={() => setIsOpenModal(false)}
      >
        <BadgeCheck />
        Fechar
      </Button>
    </div>
  );
};
