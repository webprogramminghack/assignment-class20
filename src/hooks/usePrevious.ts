// implement the usePrevious hook here
import { useEffect, useRef, useState } from 'react';

type UseCounterReturnType = {
  count: number;
  previousCount: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export function usePrevious(initialValue: number = 0): UseCounterReturnType {
  const [count, setCount] = useState(initialValue);
  const prevCountRef = useRef(count);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  let previousCount = prevCountRef.current;

  const increment = () => setCount((prevCount) => prevCount + 1);

  const decrement = () => setCount((prevCount) => prevCount - 1);

  const reset = () => {
    setCount(initialValue);
    previousCount = initialValue;
  };

  return { count, previousCount, increment, decrement, reset };
}
