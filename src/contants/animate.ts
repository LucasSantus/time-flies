import { IStructureAnimateTypes } from "@/types/StructureAnimate";
import { Variants } from "framer-motion";
import { TRANSITION_DURATION } from "./globals";

export function easeInOutAnimationDislocate({
  delay = 1,
  transition = TRANSITION_DURATION,
}: IStructureAnimateTypes): Variants {
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

export function easeInOutAnimationScale(): Variants {
  return {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
}
