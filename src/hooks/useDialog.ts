import { DialogContext } from "@/contexts/DialogContext";
import { DialogContextData } from "@/types/DialogContextData";
import { useContext } from "react";

export const useDialog = (): DialogContextData => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }

  return context;
};
