// implement the usePrevious hook here
import { useRef, useEffect } from "react";

export const usePrevious = <T>(value: T): T => {
  const prevCountRef = useRef<T>(value);

  useEffect(() => {
    prevCountRef.current = value;
  }, [value]);

  return prevCountRef.current;
}