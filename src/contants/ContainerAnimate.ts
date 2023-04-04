import { Variants } from "framer-motion";

export function CONTAINER_ANIMATE(): Variants {
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
