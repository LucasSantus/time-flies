import { CountdownContext } from "@/contexts/CountdownContext";
import { useContext } from "react";

export const useCountdown = () => useContext(CountdownContext);
