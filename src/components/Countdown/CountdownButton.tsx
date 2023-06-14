import { easeInOutAnimationVerticalDislocate } from "@/utils/animation/easeInOutAnimationVerticalDislocate";
import { MouseEventHandler } from "react";
import { Button, ButtonVariantsProps } from "../Button";

interface CountdownButtonProps {
  variant?: ButtonVariantsProps;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export const CountdownButton: React.FC<CountdownButtonProps> = ({
  variant,
  onClick,
  title,
  icon,
  type,
}) => (
  <Button
    variant={variant}
    framerMotionAnimation={easeInOutAnimationVerticalDislocate({ delay: 0.7 })}
    onClick={onClick}
    type={type}
  >
    {icon!}
    {title}
  </Button>
);
