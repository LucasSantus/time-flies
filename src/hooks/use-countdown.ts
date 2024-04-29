import {
  CountdownContext,
  CountdownContextData,
} from "@/contexts/countdown-context";
import { useContext } from "react";

export function useCountdown(): CountdownContextData {
  const context = useContext(CountdownContext);

  if (!context) {
    throw new Error("useCountdown must be used within a CountdownProvider");
  }

  return context;
}
