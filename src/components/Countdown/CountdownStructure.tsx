"use client";

import { easeInOutAnimationDislocate } from "@/contants/animate";
import { useCountdown } from "@/hooks/useCountdown";
import { CountdownColon } from "./CountdownColon";
import { CountdownNumber } from "./CountdownNumber";

interface ICountdownStructureProps {}

export const CountdownStructure: React.FC<ICountdownStructureProps> = () => {
  const { times } = useCountdown();

  return (
    <div className="grid gap-3 sm:flex sm:items-center sm:justify-center">
      {/* {Array.from({ length: values.length / 2 }).map((_, index) => {
        // check for show colon ':' in structure
        const isShowCountdownColon = index !== values.length / 2 - 1;
        const time = index * 0.2;

        console.log({ values, index, keys });

        return (
          <Fragment key={`timer-${index}`}>
            <div className="flex gap-2">
              <CountdownNumber number={values[index * 2]} variants={easeInOutAnimationDislocate({ delay: time })} />
              <CountdownNumber
                number={values[index * 2 + 1]}
                variants={easeInOutAnimationDislocate({ delay: time + 0.1 })}
              />

              <CountdownNumber
                key={`ax / 2]}-${values[index * 2]}`}
                number={values[index * 2]}
                variants={easeInOutAnimationDislocate({ delay: time })}
              />
              <CountdownNumber
                key={`ax / 2 + 1]}-${values[index * 2 + 1]}`}
                number={values[index * 2 + 1]}
                variants={easeInOutAnimationDislocate({ delay: time + 0.1 })}
              />
            </div>
            {isShowCountdownColon && <CountdownColon variants={easeInOutAnimationDislocate({ delay: 0 })} />}
          </Fragment>
        );
      })} */}

      <div className="flex gap-2">
        <CountdownNumber
          type="hourLeft"
          number={times["hourLeft"]}
          variants={easeInOutAnimationDislocate({ delay: 0.1 })}
        />
        <CountdownNumber
          type="hourRight"
          number={times["hourRight"]}
          variants={easeInOutAnimationDislocate({ delay: 0.1 })}
        />
      </div>
      <CountdownColon variants={easeInOutAnimationDislocate({ delay: 0.1 })} />

      <div className="flex gap-2">
        <CountdownNumber
          type="minuteLeft"
          number={times["minuteLeft"]}
          variants={easeInOutAnimationDislocate({ delay: 0.1 })}
        />
        <CountdownNumber
          type="minuteRight"
          number={times["minuteRight"]}
          variants={easeInOutAnimationDislocate({ delay: 0.1 })}
        />
      </div>
      <CountdownColon variants={easeInOutAnimationDislocate({ delay: 0.1 })} />

      <div className="flex gap-2">
        <CountdownNumber
          type="secondLeft"
          number={times["secondLeft"]}
          variants={easeInOutAnimationDislocate({ delay: 0.1 })}
        />
        <CountdownNumber
          type="secondRight"
          number={times["secondRight"]}
          variants={easeInOutAnimationDislocate({ delay: 0.1 })}
        />
      </div>
    </div>
  );
};
