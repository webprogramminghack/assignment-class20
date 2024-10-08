# Homework Assignment: Create a `usePrevious` Custom Hook in React with TypeScript

## Objective

The objective of this assignment is to practice creating custom hooks in React using TypeScript. You will implement a custom hook called `usePrevious` that captures the previous value of a state or prop whenever it changes.

## Instructions

### Problem Description

You are provided with a functional component that uses a custom hook called `usePrevious`. The component keeps track of a counter value and displays both the current and previous values. Your task is to **implement the `usePrevious` hook** to make this component work correctly.

### Step 1: Create the `usePrevious` Hook

Implement the custom hook `usePrevious` that:

1. **Accepts a single argument**: the current value of a state or prop (`value`).
2. **Returns the previous value** of the state or prop whenever it changes.
3. Uses React’s `useRef` hook to store the current and previous values.
4. Uses **TypeScript’s generics** to make the hook type-safe for different value types.

### Step 2: Understand the `usePrevious` Behavior

The `usePrevious` hook should:

- Store the previous value of a state or prop in a `useRef` object.
- Update the `useRef` object every time the value changes.
- Return the previous value before the change occurred.

### Initial Code

Below is the initial code you will start with:

```typescript
import React, { useState } from 'react';

// -------- Start coding here --------

export default function usePrevious<T>(value: T): T | undefined {
  // Implement your usePrevious hook here
}

// -------- Don't change the code below --------

const CounterComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div>
      <h1>Counter</h1>
      <p>Current Count: {count}</p>
      <p>Previous Count: {previousCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CounterComponent;
```
