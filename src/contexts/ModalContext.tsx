import { ModalContextData } from "@/types/ModalContextData";
import React, { PropsWithChildren, createContext, useState } from "react";

export const ModalContext = createContext({} as ModalContextData);

export const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
