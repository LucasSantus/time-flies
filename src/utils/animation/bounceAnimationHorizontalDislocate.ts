import { TRANSITION_DURATION } from "@/constants/globals";
import { Variants } from "framer-motion";

/**
 * Generates a bounce animation with horizontal dislocation.
 * @param delay The delay factor for the animation.
 * @param transition The duration of the animation transition.
 * @returns Animation variants object for bounce animation with horizontal dislocation.
 */
export function bounceAnimationHorizontalDislocate({
  delay = 1,
  transition = TRANSITION_DURATION,
}: any): Variants {
  return {
    initial: {
      opacity: 0,
      x: -70,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: transition,
        delay: transition * delay,
        bounce: transition,
      },
    },
    exit: {
      opacity: 0,
      x: -70,
      transition: {
        duration: transition,
        delay: transition * delay,
      },
    },
  };
}
