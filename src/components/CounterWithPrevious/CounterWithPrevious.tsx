import React, { useState } from 'react';
import { Button } from '../Button';
import styles from './CounterWithPrevious.module.scss';
import { usePrevious } from '@/hooks/usePrevious';

export const CounterWithPrevious: React.FC = () => {
  const [count, setCount] = useState(0);
  // please implement the usePrevious hook
  const previousCount = usePrevious(count);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={styles.counter}>
      <p>Current Count: {count}</p>
      <p>Previous Count: {previousCount}</p>
      <div className={styles.buttons}>
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
    </div>
  );
};
