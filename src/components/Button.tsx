import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import * as React from "react";

const buttonVariants = cva(
  "flex h-12 w-full items-center justify-center gap-1 rounded-md py-3 text-base font-semibold text-white shadow-md",
  {
    variants: {
      variant: {
        default: "",
        success:
          "border-custom-green-500/30 bg-custom-green-500 hover:bg-custom-green-500/60",
        error:
          "border-custom-red-500/30 bg-custom-red-500 hover:bg-custom-red-500/60",
        warning: "border-orange-600/30 bg-orange-600 hover:bg-orange-600/60",
        info: "border-cyan-600/30 bg-cyan-600 hover:bg-cyan-600/60",
        gray: "border-gray-500/30 bg-gray-500 hover:bg-gray-500/60",
        dark: "border-custom-gray-500/30 bg-custom-gray-500 hover:bg-custom-gray-500/60",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  animation?: Variants;
}

type ButtonVariantProps = VariantProps<typeof buttonVariants>["variant"];

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, animation, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <motion.div {...animation} className="w-full">
        <Comp
          className={clsx(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonVariantProps as ButtonVariantsProps };
