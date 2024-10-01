import React, { useState, useMemo } from "react";

const UseMemoComponent = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [counter, setCounter] = useState(0);

  // useMemo to memoize the sum of 'a' and 'b', With useMemo: When you wrap the calculation inside useMemo, the sum will only be recalculated if and only if a or b change. If the component re-renders due to some other state (like when you update the counter), useMemo will return the previously memoized sum and avoid recalculating it.
  const sum = useMemo(() => {
    console.log("Calculating sum");
    return a + b;
  }, [a, b]);

  // Without useMemo: Every time the component re-renders (even if a or b don't change), the expression const sum = a + b will be recalculated. This recalculation happens regardless of whether the values of a and b have actually changed.
  // const sum = a + b;

  console.log(sum);

  return (
    <div>
      <div>
        <h1>useMemo Simple Example</h1>
        <p>
          1. State Variables:
          <ul>
            <li>a and b: Numbers that will be added together.</li>
            <li>
              counter: A counter that increments independently of the sum.
            </li>
          </ul>
        </p>
        <p>
          2. useMemo:
          <ul>
            <li>The sum of a and b is memoized using useMemo.</li>
            <li>
              useMemo(() = a + b, [a, b]): This ensures the sum is only
              recalculated when a or b changes. The console will log
              "Calculating sum..." only when a or b is updated.
            </li>
          </ul>
        </p>
        <p>
          3. Behavior:
          <ul>
            <li>
              When you click "Increment A" or "Increment B", the sum is
              recalculated because the dependency array contains a and b.
            </li>
            <li>
              When you click "Increment Counter", the counter is updated, but
              the sum is not recalculated, so no additional log message is shown
              for the sum.
            </li>
          </ul>
        </p>
        <div>
          <p>
            A: {a} <br /> B: {b}
          </p>
          <p>Sum: {sum}</p>

          <button onClick={() => setA(a + 1)}>Increment A</button>
          <button onClick={() => setB(b + 1)}>Increment B</button>
        </div>

        <div>
          <h3>Counter (No Recalculation)</h3>
          <p>Counter: {counter}</p>
          <button onClick={() => setCounter(counter + 1)}>
            Increment Counter
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseMemoComponent;
