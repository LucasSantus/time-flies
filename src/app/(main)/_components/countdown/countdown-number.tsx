import { Framing } from "@/components/framer-motion/framing";
import { RenderOnClient } from "@/components/render-on-client";
import { SeparatedTimesData } from "@/types/separated-times";
import { easeInOutAnimationVerticalDislocate } from "@/utils/animation/easeInOutAnimationVerticalDislocate";

interface CountdownNumberProps {
  name: keyof SeparatedTimesData;
  value: number;
}

export function CountdownNumber({
  name,
  value,
}: CountdownNumberProps): JSX.Element {
  return (
    <Framing
      key={name + value}
      {...easeInOutAnimationVerticalDislocate({
        delay: 0.3,
        transition: 0.3,
      })}
      className="h-full select-none rounded border border-custom-gray-200 bg-custom-gray-100/50 p-2 font-mono text-9xl text-black/70 dark:border-none dark:bg-custom-gray-500 dark:text-white sm:rounded-lg sm:p-0 md:p-4"
    >
      <RenderOnClient valueToServerRendered="0">{value}</RenderOnClient>
    </Framing>
  );
}
