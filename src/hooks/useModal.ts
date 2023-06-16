import { ModalContext } from "@/contexts/ModalContext";
import { ModalContextData } from "@/types/ModalContextData";
import { useContext } from "react";

export const useModal = (): ModalContextData => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};
