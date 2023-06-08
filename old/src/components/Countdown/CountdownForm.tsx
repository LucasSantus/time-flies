import { easeInOutAnimationDislocate } from "@/constants/animate";
import { COUNTDOWN_FORM, TRANSITION_DURATION } from "@/contants/globals";
import { ICON_STYLES } from "@/contants/icon";
import { useCountdown } from "@/hooks/useCountdown";
import { convertTimeInSeconds } from "@/utils/convertTimeInSeconds";
import {
  CountdownFormData,
  countdownFormSchema,
} from "@/validation/countdown-registration";
import { zodResolver } from "@hookform/resolvers/zod";
import { FloppyDiskBack } from "phosphor-react";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../Button";
import { CountdownInput } from "./CountdownInput";

interface ICountdownFormProps {}

export const CountdownForm: React.FC<ICountdownFormProps> = () => {
  const { setTimeInSeconds, separateTime } = useCountdown();

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
    const timeInSeconds = convertTimeInSeconds(data);
    setTimeInSeconds(timeInSeconds);

    toast("Contagem alterada!", {
      type: "success",
    });
  }

  return (
    <FormProvider {...countdownForm}>
      <form
        className="flex w-full flex-col items-center justify-center gap-2 pt-2"
        onSubmit={handleSubmit(handleChangeCountdown)}
      >
        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3">
          {COUNTDOWN_FORM.map(({ label, attribute }, index) => {
            const delay = TRANSITION_DURATION + index * 0.2;
            const value = separateTime[attribute];

            return (
              <CountdownInput
                key={attribute}
                label={label}
                attribute={attribute}
                variants={easeInOutAnimationDislocate({ delay })}
                defaultValue={value}
              />
            );
          })}
        </div>

        <Button
          title="Salvar"
          icon={<FloppyDiskBack {...ICON_STYLES} />}
          variants={easeInOutAnimationDislocate({
            delay: TRANSITION_DURATION / 2,
          })}
          color="success"
          type="submit"
        />
      </form>
    </FormProvider>
  );
};
