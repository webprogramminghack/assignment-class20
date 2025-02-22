import React from 'react';
import { Button } from '../Button';
import styles from './CounterWithPrevious.module.scss';
import { usePrevious } from '@/hooks/usePrevious';

export const CounterWithPrevious: React.FC = () => {
  // please implement the usePrevious hook
  const { count, previousCount, increment, decrement, reset } = usePrevious();

  return (
    <div className={styles.counter}>
      <p>Current Count: {count}</p>
      <p>Previous Count: {previousCount}</p>
      <div className={styles.buttons}>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  );
};
