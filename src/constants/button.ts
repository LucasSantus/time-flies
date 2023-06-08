import { IButtonProps } from "@/components/Button";

interface IButtonColor extends Record<IButtonProps["color"], string> {}

export const BUTTON_STYLES: IButtonColor = {
  success: "border-custom-green-500/30 bg-custom-green-500 hover:bg-custom-green-500/60",
  error: "border-custom-red-500/30 bg-custom-red-500 hover:bg-custom-red-500/60",
  warning: "border-orange-600/30 bg-orange-600 hover:bg-orange-600/60",
  info: "border-cyan-600/30 bg-cyan-600 hover:bg-cyan-600/60",
  gray: "border-gray-500/30 bg-gray-500 hover:bg-gray-500/60",
  dark: "border-custom-gray-500/30 bg-custom-gray-500 hover:bg-custom-gray-500/60",
};
