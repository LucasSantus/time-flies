import { easeInOutAnimationVerticalDislocate } from "@/utils/animation/easeInOutAnimationVerticalDislocate";
import { MouseEventHandler, forwardRef } from "react";
import { Button, ButtonVariantsProps } from "../Button";

interface CountdownButtonProps {
  variant?: ButtonVariantsProps;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export const CountdownButton = forwardRef<
  HTMLButtonElement,
  CountdownButtonProps
>(({ variant, onClick, title, icon, type }, ref) => (
  <Button
    variant={variant}
    animation={easeInOutAnimationVerticalDislocate({ delay: 0.7 })}
    onClick={onClick}
    type={type}
    ref={ref} // Encaminhe a referência para o elemento interno do botão
  >
    {icon}
    {title}
  </Button>
));
CountdownButton.displayName = "CountdownButton";
