import { animateButton } from "@/contants/animate";
import { EColorButton } from "@/contants/button";
import { useCountdown } from "@/hooks/useCountdown";
import { formatTimeInSeconds } from "@/utils/formatTimeInSeconds";
import { zodResolver } from "@hookform/resolvers/zod";
import { FloppyDiskBack } from "phosphor-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { TimerButton } from "./TimerButton";

const createUserFormSchema = z.object({
  hours: z.coerce.number().min(0, "O campo hora não pode ser menor que 1").max(24),
  minutes: z.coerce.number().min(0, "O campo minuto não pode ser menor que 1").max(60),
  seconds: z.coerce.number().min(0, "O campo segundo não pode ser menor que 1").max(60),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

interface ITimerFormProps {
  onSubmit: () => void;
}

export const TimerForm: React.FC<ITimerFormProps> = ({ onSubmit }) => {
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

      <TimerButton
        className={EColorButton.GREEN}
        type="submit"
        title="Salvar"
        icon={<FloppyDiskBack size={27} className="h-8" />}
        variantsAnimation={animateButton({ delay: 0.7 })}
        onClick={() => {}}
      />
    </form>
  );
};
