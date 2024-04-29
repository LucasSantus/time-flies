import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";

interface CountdownButtonProps extends ComponentProps<typeof Button> {}

export function CountdownButton({
  title,
  ...rest
}: CountdownButtonProps): JSX.Element {
  return <Button {...rest}>{title}</Button>;
}
