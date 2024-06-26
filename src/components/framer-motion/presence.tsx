"use client";

import { AnimatePresence, AnimatePresenceProps } from "framer-motion";
import { ReactNode } from "react";

interface PresenceProps extends AnimatePresenceProps {
  children: ReactNode;
}

export function Presence({ children, ...props }: PresenceProps): JSX.Element {
  return <AnimatePresence {...props}>{children}</AnimatePresence>;
}
