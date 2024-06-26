import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";

const buttonVariants = cva(
  "inline-flex w-full items-center gap-2 justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success:
          "border-custom-green-500/30 bg-custom-green-500 hover:bg-custom-green-500/60 text-white",
        error:
          "border-custom-red-500/30 bg-custom-red-500 hover:bg-custom-red-500/60 text-white",
        warning:
          "border-orange-600/30 bg-orange-600 hover:bg-orange-600/60 text-white",
        info: "border-cyan-600/30 bg-cyan-600 hover:bg-cyan-600/60 text-white",
        gray: "border-gray-500/30 bg-gray-500 hover:bg-gray-500/60 text-white",
        dark: "border-custom-gray-500/30 bg-custom-gray-500 hover:bg-custom-gray-500/60 text-white",
      },
      size: {
        default: "h-14 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading,
      disabled,
      icon,
      children,
      ...rest
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "button";

    const isDisabled = isLoading || disabled;

    return (
      <Component
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...rest}
      >
        {isLoading ? (
          <Loader2Icon className="mr-2 size-4 animate-spin" />
        ) : (
          icon
        )}{" "}
        {children}
      </Component>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
