# Homework Assignment: Managing Form State with `useReducer` in React and TypeScript

## Objective

The objective of this assignment is to learn how to use the `useReducer` hook to manage complex state in a React form. You will implement the reducer function and complete a form component that handles multiple inputs using the `useReducer` hook in a structured and scalable way.

## Instructions

### Problem Description

You are provided with a React component `UserFormWithReducer` that uses the `useReducer` hook to manage the state of a simple form with multiple inputs (`name`, `email`, and `age`). Your task is to:

1. **Implement the `formReducer` function** to handle state updates based on dispatched actions.
2. **Handle form input changes** by dispatching actions to the reducer using the input field’s `name` attribute.
3. Ensure the form state is updated correctly for each input field and that the final state is logged upon form submission.

### Requirements

1. **Reducer Function**: Implement a reducer function called `formReducer` that takes the current state and an action as arguments and returns a new state based on the action type.
2. **Action Handling**: The reducer should handle the following action types:
   - `'UPDATE_NAME'` — Updates the `name` field in the form state.
   - `'UPDATE_EMAIL'` — Updates the `email` field in the form state.
   - `'UPDATE_AGE'` — Updates the `age` field in the form state.
3. **Handle Input Changes**: Complete the `handleChange` function in the `UserFormWithReducer` component to dispatch the correct action based on the input field being changed.

### Initial Code

Below is the initial code provided for you to complete:

```typescript
import React, { useReducer, ChangeEvent, FormEvent } from 'react';
import styles from './UserFormWithReducer.module.scss';
import { Button } from '@/components/Button';

interface FormState {
  name: string;
  email: string;
  age: string;
}

type Action =
  | { type: 'UPDATE_NAME'; payload: string }
  | { type: 'UPDATE_EMAIL'; payload: string }
  | { type: 'UPDATE_AGE'; payload: string };

const initialState: FormState = {
  name: '',
  email: '',
  age: '',
};

function formReducer(state: FormState, action: Action): FormState {
  // please implement the reducer
}

// Step 5: Implement the `UserForm` component using `useReducer`
export const UserFormWithReducer: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // you can use name to differentiate between the fields
    const { name, value } = e.target;

    // make the switch case and utilize the name to differentiate between the fields
    // value is for payload
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formInputs}>
      <div className={styles.inputGroup}>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          name='name'
          id='name'
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='email'>Email: </label>
        <input
          type='email'
          name='email'
          id='email'
          value={state.email}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='age'>Age: </label>
        <input
          type='text'
          name='age'
          id='age'
          value={state.age}
          onChange={handleChange}
        />
      </div>
      <Button>Submit</Button>
    </form>
  );
};
```
