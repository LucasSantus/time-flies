import { CountdownContext } from "@/contexts/CountdownContext";
import { CountdownContextData } from "@/types/CountdownContextData";
import { useContext } from "react";

export const useCountdown = (): CountdownContextData => {
  const context = useContext(CountdownContext);

  if (!context) {
    throw new Error("useCountdown must be used within a CountdownProvider");
  }

  return context;
};
