import { IStructureAnimateTypes } from "@/types/StructureAnimate";
import { Variants } from "framer-motion";
import { TRANSITION_DURATION } from "./ConfigGlobals";

export function BUTTON_ANIMATE({ delay = 1, transition = TRANSITION_DURATION }: IStructureAnimateTypes): Variants {
  return {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: transition,
        delay: transition * delay,
        ease: "easeInOut",
      },
    },
  };
}
