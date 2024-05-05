"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useCountdown } from "@/hooks/use-countdown";
import { BadgeCheck, CheckIcon } from "lucide-react";
import { Fragment } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "usehooks-ts";

interface CountdownDialogFinishedProps {}

export function CountdownDialogFinished({}: CountdownDialogFinishedProps): JSX.Element | null {
  const { isFinished, finishedCountdown } = useCountdown();
  const { width, height } = useWindowSize();

  if (isFinished)
    return (
      <Fragment>
        <Confetti width={width} height={height} />

        <AlertDialog defaultOpen={true}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <CheckIcon
                size={80}
                className="w-full stroke-custom-green-500 text-center"
              />
              <AlertDialogTitle className="text-center text-3xl font-normal">
                Contagem Finalizada!
              </AlertDialogTitle>

              <AlertDialogDescription className="px-3 text-base font-normal">
                Opss... parece que acabou, que tal iniciar-mos uma nova
                contagem?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction
                asChild
                className="bg-custom-green-300 text-white hover:bg-custom-green-500"
              >
                <Button
                  variant="success"
                  type="submit"
                  icon={<BadgeCheck className="size-5" />}
                  className="h-11"
                  onClick={finishedCountdown}
                >
                  Fechar
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Fragment>
    );

  return null;
}
