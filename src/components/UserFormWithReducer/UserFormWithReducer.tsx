import { Button } from '@/components/Button';
import React, { ChangeEvent, FormEvent, useReducer } from 'react';
import styles from './UserFormWithReducer.module.scss';

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
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    case 'UPDATE_AGE':
      return { ...state, age: action.payload };
    default: {
      const _exhaustiveCheck: never = action;
      throw new Error(`Unhandled action type: ${_exhaustiveCheck}`);
    }
  }
}

// Step 5: Implement the `UserForm` component using `useReducer`
export const UserFormWithReducer: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // you can use name to differentiate between the fields
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return dispatch({ type: 'UPDATE_NAME', payload: value });
      case 'email':
        return dispatch({ type: 'UPDATE_EMAIL', payload: value });
      case 'age':
        return dispatch({ type: 'UPDATE_AGE', payload: value });
    }

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
