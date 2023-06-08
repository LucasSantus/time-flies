import { TRANSITION_DURATION } from "@/constants/globals";
import { StructureAnimation } from "@/types/StructureAnimation";
import { Variants } from "framer-motion";

export function easeInOutAnimationDislocate({
  delay = 1,
  transition = TRANSITION_DURATION,
}: StructureAnimation): Variants {
  return {
    initial: {
      opacity: 0,
      y: 30,
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
