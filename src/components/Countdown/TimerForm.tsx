import { animateButton } from "@/contants/animate";
import { EColorButton } from "@/contants/button";
import { useCountdown } from "@/hooks/useCountdown";
import { useLocale } from "@/hooks/useLocale";
import generalTranslations from "@/locales/general";
import { formatTimeInSeconds } from "@/utils/formatTimeInSeconds";
import { CreateUserFormData, createUserFormSchema } from "@/validation/timer-registration";
import { zodResolver } from "@hookform/resolvers/zod";
import { FloppyDiskBack } from "phosphor-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../Button";

interface ITimerFormProps {
  onSubmit: () => void;
}

export const TimerForm: React.FC<ITimerFormProps> = ({ onSubmit }) => {
  const { locale } = useLocale();
  const translations = generalTranslations[locale];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const { setTimeInSeconds } = useCountdown();

  function createTimeOut(data: CreateUserFormData) {
    const timeInSeconds = formatTimeInSeconds(data);
    setTimeInSeconds(timeInSeconds);
    onSubmit();
  }

  useEffect(() => {
    const keys = Object.keys(errors) as Array<keyof CreateUserFormData>;

    if (keys.length) {
      keys.forEach((key) => {
        toast(errors[key]?.message, {
          type: "error",
        });
      });
    }
  }, [errors]);

  return (
    <form className="flex w-full flex-col items-center justify-center" onSubmit={handleSubmit(createTimeOut)}>
      <div className="grid h-10 w-full grid-cols-3 gap-2">
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
        icon={<FloppyDiskBack size={20} />}
        variants={animateButton({ delay: 0.7 })}
        onClick={() => {}}
      />
    </form>
  );
};
