import { animateButton } from "@/contants/animate";
import { EColorButton } from "@/contants/button";
import { SIZE_ICON } from "@/contants/globals";
import { useCountdown } from "@/hooks/useCountdown";
import { useTranslations } from "@/hooks/useTranslations";
import { convertTimeInSeconds } from "@/utils/convertTimeInSeconds";
import { CreateCountdownFormData, createCountdownFormSchema } from "@/validation/countdown-registration";
import { zodResolver } from "@hookform/resolvers/zod";
import { FloppyDiskBack } from "phosphor-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../Button";

interface ICountdownFormProps {}

export const CountdownForm: React.FC<ICountdownFormProps> = () => {
  const translations = useTranslations("general");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCountdownFormData>({
    resolver: zodResolver(createCountdownFormSchema),
  });

  const { setTimeInSeconds } = useCountdown();

  function createCountdown(data: CreateCountdownFormData) {
    const timeInSeconds = convertTimeInSeconds(data);
    setTimeInSeconds(timeInSeconds);
  }

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

  return (
    <form className="flex w-full flex-col items-center justify-center" onSubmit={handleSubmit(createCountdown)}>
      <div className="grid h-10 w-full grid-cols-3 gap-2">
        {/* TODO: Criar componente para inputs do countdowm */}
        <div>
          <input type="number" className="h-8 w-full rounded border pl-1" {...register("hours")} />
        </div>

        <div>
          <input type="number" className="h-8 w-full rounded border pl-1" {...register("minutes")} />
        </div>

        <div>
          <input type="number" className="h-8 w-full rounded border pl-1" {...register("seconds")} />
        </div>
      </div>

      <Button
        className={EColorButton.GREEN}
        type="submit"
        title={translations.save}
        icon={<FloppyDiskBack size={SIZE_ICON} />}
        variants={animateButton({ delay: 0.7 })}
      />
    </form>
  );
};
