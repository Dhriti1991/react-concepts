import React, { useState, useEffect } from "react";
import SixthChild from "./sixth-child";

// Parent component that can change the `initialTime` prop
const SixthComponent = () => {
  const [startTime, setStartTime] = useState(10);

  return (
    <div>
      <p>
        the component's state is constantly updated based on the prop values,
        meaning the state is re-synchronized every time the prop changes.
        <br />
        Use Case: A countdown timer that resets whenever the parent component
        changes the initial time. The state (time) is derived from the
        initialTime prop whenever it changes.
      </p>
      <SixthChild initialTime={startTime} />
      <button onClick={() => setStartTime(20)}>Reset Timer to 20</button>
      <button onClick={() => setStartTime(5)}>Reset Timer to 5</button>
    </div>
  );
};

export default SixthComponent;
