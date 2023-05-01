import { easeInOutAnimationDislocate } from "@/contants/animate";
import { TRANSITION_DURATION } from "@/contants/globals";
import { ICON_STYLES } from "@/contants/icon";
import { useCountdown } from "@/hooks/useCountdown";
import { convertTimeInSeconds } from "@/utils/convertTimeInSeconds";
import { CreateCountdownFormData, createCountdownFormSchema } from "@/validation/countdown-registration";
import { zodResolver } from "@hookform/resolvers/zod";
import { FloppyDiskBack } from "phosphor-react";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../Button";
import { CountdownInput } from "./CountdownInput";

interface ICountdownFormProps {}

export const CountdownForm: React.FC<ICountdownFormProps> = () => {
  const { setTimeInSeconds, separateTime } = useCountdown();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCountdownFormData>({
    resolver: zodResolver(createCountdownFormSchema),
  });

  // check if any field has an error
  useEffect(() => {
    const keys = Object.keys(errors) as Array<keyof CreateCountdownFormData>;

    if (keys.length) {
      keys.forEach((key) => {
        toast(errors[key]?.message, {
          type: "error",
        });
      });
    }
  }, [errors]);

  function createCountdown(data: CreateCountdownFormData) {
    const timeInSeconds = convertTimeInSeconds(data);
    setTimeInSeconds(timeInSeconds);
  }

  interface MountedForm {
    label: string;
    attribute: "hours" | "minutes" | "seconds";
  }

  const mountedForm: MountedForm[] = [
    {
      label: "Horas",
      attribute: "hours",
    },
    {
      label: "Minutos",
      attribute: "minutes",
    },
    {
      label: "Segundos",
      attribute: "seconds",
    },
  ];

  return (
    <form
      className="flex w-full flex-col items-center justify-center gap-2 pt-2"
      onSubmit={handleSubmit(createCountdown)}
    >
      <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3">
        {mountedForm.map(({ label, attribute }, index) => {
          const delay = TRANSITION_DURATION + index * 0.2;
          const value = separateTime[attribute];

          return (
            <Controller
              key={attribute}
              name={attribute}
              control={control}
              defaultValue={value}
              render={({ field }) => (
                <CountdownInput
                  label={label}
                  attribute={attribute}
                  variants={easeInOutAnimationDislocate({ delay })}
                  {...field}
                />
              )}
            />
          );
        })}
      </div>

      <Button
        title="Salvar"
        icon={<FloppyDiskBack {...ICON_STYLES} />}
        variants={easeInOutAnimationDislocate({ delay: TRANSITION_DURATION / 2 })}
        color="success"
        type="submit"
      />
    </form>
  );
};
