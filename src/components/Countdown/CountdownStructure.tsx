import { animateButton } from "@/contants/animate";
import { useCountdown } from "@/hooks/useCountdown";
import { Fragment } from "react";
import { CountdownColon } from "./CountdownColon";
import { CountdownNumber } from "./CountdownNumber";

interface ICountdownStructureProps {}

export const CountdownStructure: React.FC<ICountdownStructureProps> = () => {
  const { times } = useCountdown();

  const values = Object.values(times);

  return (
    <div className="grid gap-3 sm:flex sm:items-center sm:justify-center">
      {Array.from({ length: values.length / 2 }).map((_, index) => {
        const isShowCountdownColon = index !== values.length / 2 - 1;
        const time = index * 0.6;

        return (
          <Fragment key={`timer-${index}`}>
            <div className="flex gap-2">
              <CountdownNumber number={values[index * 2]} variants={animateButton({ delay: time })} />
              <CountdownNumber number={values[index * 2 + 1]} variants={animateButton({ delay: time + 0.3 })} />
            </div>
            {isShowCountdownColon && <CountdownColon variants={animateButton({ delay: 0 })} />}
          </Fragment>
        );
      })}
    </div>
  );
};
