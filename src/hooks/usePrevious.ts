import { useEffect, useRef } from 'react'

export function usePrevious(number: number = 0): number {
  const numberPrev = useRef<number>(number)

  useEffect(() => {
    numberPrev.current = number;
  }, [number]);
  
  return numberPrev.current
}
