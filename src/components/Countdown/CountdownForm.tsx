import { animateButton } from "@/contants/animate";
import { EColorButton } from "@/contants/button";
import { SIZE_ICON, TRANSITION_DURATION } from "@/contants/globals";
import { useCountdown } from "@/hooks/useCountdown";
import { convertTimeInSeconds } from "@/utils/convertTimeInSeconds";
import { CreateCountdownFormData, createCountdownFormSchema } from "@/validation/countdown-registration";
import { zodResolver } from "@hookform/resolvers/zod";
import { FloppyDiskBack } from "phosphor-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../Button";
import { CountdownInput } from "./CountdownInput";

interface ICountdownFormProps {}

export const CountdownForm: React.FC<ICountdownFormProps> = () => {
  const { setTimeInSeconds, separateTime } = useCountdown();

  const {
    register,
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
    console.log(data);
    const timeInSeconds = convertTimeInSeconds(data);
    setTimeInSeconds(timeInSeconds);
  }

  interface MountedForm {
    label: string;
    reference: "hours" | "minutes" | "seconds";
  }

  const mountedForm: MountedForm[] = [
    {
      label: "Horas",
      reference: "hours",
    },
    {
      label: "Minutos",
      reference: "minutes",
    },
    {
      label: "Segundos",
      reference: "seconds",
    },
  ];

  return (
    <form
      className="flex w-full flex-col items-center justify-center gap-2 pt-2"
      onSubmit={handleSubmit(createCountdown)}
    >
      <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3">
        {mountedForm.map(({ label, reference }, index) => {
          const delay = TRANSITION_DURATION + index * 0.2;
          const value = separateTime[reference];

          return (
            <CountdownInput
              key={reference}
              label={label}
              reference={reference}
              variants={animateButton({ delay })}
              {...register(reference)}
              defaultValue={value}
            />
          );
        })}
      </div>

      <Button
        className={EColorButton.GREEN}
        type="submit"
        title="Salvar"
        icon={<FloppyDiskBack size={SIZE_ICON} />}
        variants={animateButton({ delay: TRANSITION_DURATION / 2 })}
      />
    </form>
  );
};
