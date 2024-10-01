import React, { useState, useCallback } from "react";

// Button component
const Button = React.memo(({ onClick }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>Increment</button>;
});

const UsecallBackComponent = () => {
  const [count, setCount] = useState(0);

  // // Function to increment the counter
  // const increment = () => {
  //   setCount(count + 1);
  // };

  // Without useCallback as above, the increment function is re-created every time the state changes, which causes the Button component to re-render even if its behavior is the same.

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  // With useCallback as above, the increment function is memoized and only created once. Now, the Button component will only re-render if necessary (e.g., if the function changes), improving performance.

  console.log("Counter rendered");

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment} />
      <p>
        Note:Key Considerations: Use useCallback with React.memo when the child
        component receives a function as a prop, and you want to avoid
        re-renders if the function logic hasn't changed. Don't overuse: In
        smaller components or when performance isn't a concern, using both
        useCallback and React.memo might add unnecessary complexity. Use them
        when you are dealing with performance bottlenecks.
        <br />
        In Summary: If you're passing functions to memoized components
        (React.memo), then yes, useCallback can help ensure the function
        reference stays the same across renders, avoiding unnecessary
        re-renders. But, if your component doesn't have performance concerns,
        you may not need to apply both.
      </p>
    </div>
  );
};

export default UsecallBackComponent;
