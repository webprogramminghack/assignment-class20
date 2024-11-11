import { UserFormWithReducer } from '@/components/UserFormWithReducer';
import styles from './App.module.scss';
import { CounterWithPrevious } from './components/CounterWithPrevious';

function App() {
  return (
    <div className={styles.container}>
      {/* Test the component here */}
      <CounterWithPrevious />
      <UserFormWithReducer />
    </div>
  );
}

export default App;
