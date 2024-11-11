// implement the usePrevious hook here
import { useEffect, useRef } from 'react';

// type UseCounterReturnType = {
//   prevCount: number;
// };

export function usePrevious(initialValue: number) {
  const prevCountRef = useRef(initialValue);

  useEffect(() => {
    prevCountRef.current = initialValue;
  }, [initialValue]);

  const prevCount = prevCountRef.current;

  return prevCount;
}
