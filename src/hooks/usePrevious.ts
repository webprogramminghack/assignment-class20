// implement the usePrevious hook here
import { useRef, useEffect } from "react";

export const usePrevious = (value: number = 0): number => {
  const prevCountRef = useRef<number>(value);

  useEffect(() => {
    prevCountRef.current = value;
  }, [value]);

  return prevCountRef.current;
}