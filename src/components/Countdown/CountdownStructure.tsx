import { easeInOutAnimationDislocate } from "@/contants/animate";
import { useCountdown } from "@/hooks/useCountdown";
import { CountdownColon } from "./CountdownColon";
import { CountdownNumber } from "./CountdownNumber";

interface ICountdownStructureProps {}

export const CountdownStructure: React.FC<ICountdownStructureProps> = () => {
  const { times } = useCountdown();

  return (
    <div className="grid gap-3 sm:flex sm:items-center sm:justify-center">
      <div className="flex gap-2">
        <CountdownNumber
          attribute="hourLeft"
          number={times["hourLeft"]}
          variants={easeInOutAnimationDislocate({ delay: 0.2 })}
        />
        <CountdownNumber
          attribute="hourRight"
          number={times["hourRight"]}
          variants={easeInOutAnimationDislocate({ delay: 0.2 })}
        />
      </div>
      <CountdownColon variants={easeInOutAnimationDislocate({ delay: 0.2 })} />

      <div className="flex gap-2">
        <CountdownNumber
          attribute="minuteLeft"
          number={times["minuteLeft"]}
          variants={easeInOutAnimationDislocate({ delay: 0.2 })}
        />
        <CountdownNumber
          attribute="minuteRight"
          number={times["minuteRight"]}
          variants={easeInOutAnimationDislocate({ delay: 0.2 })}
        />
      </div>
      <CountdownColon variants={easeInOutAnimationDislocate({ delay: 0.2 })} />

      <div className="flex gap-2">
        <CountdownNumber
          attribute="secondLeft"
          number={times["secondLeft"]}
          variants={easeInOutAnimationDislocate({ delay: 0.2 })}
        />
        <CountdownNumber
          attribute="secondRight"
          number={times["secondRight"]}
          variants={easeInOutAnimationDislocate({ delay: 0.2 })}
        />
      </div>
    </div>
  );
};
