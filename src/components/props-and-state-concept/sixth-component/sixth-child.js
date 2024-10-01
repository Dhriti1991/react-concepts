import React, { useState, useEffect } from "react";

const SixthChild = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  // Update state whenever the prop `initialTime` changes
  useEffect(() => {
    setTime(initialTime); // Derived state from prop
  }, [initialTime]);

  // Simulate a countdown
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  return <div>Time left: {time} seconds</div>;
};

export default SixthChild;
