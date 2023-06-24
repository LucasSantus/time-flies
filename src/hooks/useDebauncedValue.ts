import { useEffect, useState } from "react";

export const useDebouncedValue = <T>(
  value: T,
  delayInMilliseconds: number
): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delayInMilliseconds);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delayInMilliseconds]);

  return debouncedValue;
};
