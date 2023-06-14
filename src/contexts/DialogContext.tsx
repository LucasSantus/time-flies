import { DialogContextData } from "@/types/DialogContextData";
import React, { PropsWithChildren, createContext, useState } from "react";

export const DialogContext = createContext({} as DialogContextData);

export const DialogProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
};
