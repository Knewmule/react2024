import { useState, memo, useCallback,useMemo} from 'react';
import CounterHistory from './CounterHistory.jsx'
import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';

function isPrime(number) {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
// Memo keeps the compoent from rendering again by checking the props and comparing it to the next one
// when it gets rendered again in app memo will see prop never changed and not allow counter to rerender
// Memo only cares about external changes not internal ones. It should not be used for all components
// Only use memo for components that are high up on the component tree
const Counter = memo (
  function Counter({ initialCount }) {
    log('<Counter /> rendered', 1);
    const initialCountIsPrime = useMemo(() =>isPrime(initialCount), [initialCount]);
  
    const [counter, setCounter] = useState(initialCount);
  
    const handleDecrement = useCallback(function handleDecrement() {
      setCounter((prevCounter) => prevCounter - 1);
    },[])
  
    const handleIncrement = useCallback(
      function handleIncrement() {
        setCounter((prevCounter) => prevCounter + 1);
      },[]);
  
    return (
      <section className="counter">
        <p className="counter-info">
          The initial counter value was <strong>{initialCount}</strong>. It{' '}
          <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
        </p>
        <p>
          <IconButton icon={MinusIcon} onClick={handleDecrement}>
            Decrement
          </IconButton>
          <CounterOutput value={counter} />
          <IconButton icon={PlusIcon} onClick={handleIncrement}>
            Increment
          </IconButton>
        </p>
          
      </section>
    );
  }
)
export default Counter;
