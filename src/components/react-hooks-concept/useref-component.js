import React, { useState, useRef } from "react";

const UseRefComponent = () => {
  const inputRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleEventChange = () => {
    inputRef.current.focus();
    console.log("Input field is focused using useRef");
    setMessage(
      "Input field is focused using useRef when the button is clicked"
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value="name"
          placeholder="placeholder"
          ref={inputRef}
        />
        <button onClick={handleEventChange}>Click</button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default UseRefComponent;
