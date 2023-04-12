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
    <div className="grid items-center justify-center gap-3 sm:flex">
      {Array.from({ length: values.length / 2 }).map((_, index) => {
        const isShowCountdownColon = index !== values.length / 2 - 1;

        return (
          <Fragment key={`timer-${index}`}>
            <div className="flex gap-2">
              <CountdownNumber number={values[index * 2]} variants={animateButton({ delay: 0.2 })} />
              <CountdownNumber number={values[index * 2 + 1]} variants={animateButton({ delay: 0.2 })} />
            </div>
            {isShowCountdownColon && <CountdownColon variants={animateButton({ delay: 0 })} />}
          </Fragment>
        );
      })}
    </div>
  );
};
