"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { useModal } from "@/hooks/useModal";
import { easeInOutAnimationVerticalDislocate } from "@/utils/animation/easeInOutAnimationVerticalDislocate";
import { convertFormDataInSeconds } from "@/utils/convertFormDataInSeconds";
import {
  CountdownFormData,
  countdownFormSchema,
} from "@/validation/countdown-registration";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../Button";
import { CountdownInput } from "./CountdownInput";

interface CountdownFormProps {}

export const CountdownForm: React.FC<CountdownFormProps> = () => {
  const { setTimeInSeconds, times } = useCountdown();

  const { setIsOpen: setIsOpenModal } = useModal();

  const countdownForm = useForm<CountdownFormData>({
    resolver: zodResolver(countdownFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = countdownForm;

  // check if any field has an error
  useEffect(() => {
    const keys = Object.keys(errors) as Array<keyof CountdownFormData>;

    if (keys.length) {
      keys.forEach((key) => {
        toast(errors[key]?.message, {
          type: "error",
        });
      });
    }
  }, [errors]);

  function handleChangeCountdown(data: CountdownFormData) {
    const timeInSeconds = convertFormDataInSeconds(data);
    setTimeInSeconds(timeInSeconds);

    toast("Contagem alterada!", {
      type: "success",
    });

    setIsOpenModal(false);
  }

  return (
    <FormProvider {...countdownForm}>
      <form
        className="flex w-full flex-col items-center justify-center gap-2 pt-2"
        onSubmit={handleSubmit(handleChangeCountdown)}
      >
        <div className="grid w-full grid-cols-12 gap-2">
          <fieldset className="col-span-6 sm:col-span-2">
            <CountdownInput
              attribute="hourLeft"
              defaultValue={times.hourLeft}
            />
          </fieldset>

          <fieldset className="col-span-6 sm:col-span-2">
            <CountdownInput
              attribute="hourRight"
              defaultValue={times.hourRight}
            />
          </fieldset>

          <fieldset className="col-span-6 sm:col-span-2">
            <CountdownInput
              attribute="minuteLeft"
              defaultValue={times.minuteLeft}
            />
          </fieldset>

          <fieldset className="col-span-6 sm:col-span-2">
            <CountdownInput
              attribute="minuteRight"
              defaultValue={times.minuteRight}
            />
          </fieldset>

          <fieldset className="col-span-6 sm:col-span-2">
            <CountdownInput
              attribute="secondLeft"
              defaultValue={times.secondLeft}
            />
          </fieldset>

          <fieldset className="col-span-6 sm:col-span-2">
            <CountdownInput
              attribute="secondRight"
              defaultValue={times.secondRight}
            />
          </fieldset>
        </div>

        <Button
          variant="success"
          animation={easeInOutAnimationVerticalDislocate({
            delay: 0.7,
          })}
          type="submit"
        >
          <Save />
          Salvar
        </Button>
      </form>
    </FormProvider>
  );
};
