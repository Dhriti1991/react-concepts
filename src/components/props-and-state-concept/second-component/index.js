import React, { useEffect, useState } from "react";

const SecondComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementCount = () => {
    setCounter(counter + 1); //It updates the counter value increasing by 1
  };

  const decrementCount = () => {
    setCounter(counter - 1); //It updates the counter value decreasing by 1
  };

  return (
    <>
      <div style={{ display: `flex`, columnGap: `10px` }}>
        <button onClick={decrementCount}>Decrement</button>

        <p>Counter: {counter}</p>
        <button onClick={incrementCount}>Increment</button>
      </div>
    </>
  );
};

export default SecondComponent;
