import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter((prevCounter) => prevCounter + 1);
    console.log('Incrementing');
  }
  return (
    <>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment +1
      </button>
    </>
  );
}
