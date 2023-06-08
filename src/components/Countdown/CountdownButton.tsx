import { easeInOutAnimationVerticalDislocate } from "@/utils/animation/easeInOutAnimationVerticalDislocate";
import { MouseEventHandler } from "react";
import { Button, ButtonVariantsProps } from "../Button";

interface CountdownButtonProps {
  variant?: ButtonVariantsProps;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
  icon?: React.ReactNode;
}

export const CountdownButton: React.FC<CountdownButtonProps> = ({
  variant,
  onClick,
  title,
  icon,
}) => (
  <Button
    variant={variant}
    framerMotionAnimation={easeInOutAnimationVerticalDislocate({ delay: 0.7 })}
    onClick={onClick}
  >
    {icon!}
    {title}
  </Button>
);
