import { Framing } from "@/components/framer-motion/framing";
import { easeInOutAnimationVerticalDislocate } from "@/utils/animation/easeInOutAnimationVerticalDislocate";

export function CountdownColon(): JSX.Element {
  return (
    <Framing
      {...easeInOutAnimationVerticalDislocate({
        delay: 0.2,
      })}
    >
      <div className="hidden h-full select-none items-center sm:flex">
        <div className="text-custom-green-500 sm:text-9xl">:</div>
      </div>

      <div className="flex sm:hidden">
        <div className="my-2 w-14 select-none border border-b-custom-green-300" />
      </div>
    </Framing>
  );
}
