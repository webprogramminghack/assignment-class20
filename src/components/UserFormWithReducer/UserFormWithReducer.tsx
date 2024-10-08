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
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor='age'>Age: </label>
        <input
          type='text'
          name='age'
          id='age'
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <Button>Submit</Button>
    </form>
  );
};
