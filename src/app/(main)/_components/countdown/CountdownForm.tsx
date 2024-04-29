"use client";

import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useCountdown } from "@/hooks/use-countdown";
import { convertFormDataInSeconds } from "@/utils/convertFormDataInSeconds";
import { CountdownFormData, countdownFormSchema } from "@/validation/countdown";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { CountdownInput } from "./CountdownInput";

interface CountdownFormProps {}

export const CountdownForm: React.FC<CountdownFormProps> = () => {
  const { setTimeInSeconds, times } = useCountdown();

  const form = useForm<CountdownFormData>({
    resolver: zodResolver(countdownFormSchema),
    defaultValues: {
      hourLeft: times.hourLeft,
      hourRight: times.hourRight,
      minuteLeft: times.minuteLeft,
      minuteRight: times.minuteRight,
      secondLeft: times.secondLeft,
      secondRight: times.secondRight,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = form;

  // check if any field has an error
  useEffect(() => {
    const keys = Object.keys(errors) as Array<keyof CountdownFormData>;

    if (keys.length) {
      keys.forEach((key) => {
        toast.error(errors[key]?.message);
      });
    }
  }, [errors]);

  function onHandleSubmit(data: CountdownFormData) {
    const timeInSeconds = convertFormDataInSeconds(data);
    setTimeInSeconds(timeInSeconds);

    toast.success("Atualização salva com sucesso!");
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col items-center justify-center gap-2 pt-2"
        onSubmit={handleSubmit(onHandleSubmit)}
      >
        <div className="grid w-full grid-cols-12 gap-2">
          <div className="col-span-6 sm:col-span-2">
            <CountdownInput control={control} name="hourLeft" />
          </div>

          <div className="col-span-6 sm:col-span-2">
            <CountdownInput control={control} name="hourRight" />
          </div>

          <div className="col-span-6 sm:col-span-2">
            <CountdownInput control={control} name="minuteLeft" />
          </div>

          <div className="col-span-6 sm:col-span-2">
            <CountdownInput control={control} name="minuteRight" />
          </div>

          <div className="col-span-6 sm:col-span-2">
            <CountdownInput control={control} name="secondLeft" />
          </div>

          <div className="col-span-6 sm:col-span-2">
            <CountdownInput control={control} name="secondRight" />
          </div>
        </div>

        {isValid ? (
          <DialogClose asChild>
            <Button
              variant="success"
              type="submit"
              icon={<Save className="size-5" />}
            >
              Salvar
            </Button>
          </DialogClose>
        ) : (
          <Button
            variant="success"
            type="submit"
            icon={<Save className="size-5" />}
          >
            Salvar
          </Button>
        )}
      </form>
    </Form>
  );
};
