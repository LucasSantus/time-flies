import React, { PropsWithChildren } from "react";
import { CountdownProvider } from "./CountdownContext";

export const Contexts: React.FC<PropsWithChildren> = ({ children }) => {
  return <CountdownProvider>{children}</CountdownProvider>;
};
