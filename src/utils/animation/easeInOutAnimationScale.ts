import { TRANSITION_DURATION } from "@/constants/globals";
import { StructureAnimation } from "@/types/StructureAnimation";
import { Variants } from "framer-motion";

export function easeInOutAnimationScale({
  delay = 1,
  transition = TRANSITION_DURATION,
}: StructureAnimation): Variants {
  return {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: transition,
        delay: transition * delay,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: transition,
        delay: transition * delay,
      },
    },
  };
}
