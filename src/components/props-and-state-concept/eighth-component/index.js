import React, { useState } from "react";
import PropTypes from "prop-types";

const ToggleButton = ({ isOn, toggle }) => {
  //child component
  return (
    <button onClick={toggle}>
      {isOn ? "ON" : "OFF"} {/* Conditional rendering based on `isOn` prop */}
    </button>
  );
};

// Prop validation
ToggleButton.propTypes = {
  isOn: PropTypes.bool.isRequired, // `isOn` is a boolean prop
  toggle: PropTypes.func.isRequired, // `toggle` is a function prop for toggling the state
};

const EighthComponent = () => {
  //parent component
  const [isOn, setIsOn] = useState(false); // State for tracking ON/OFF

  // Function to toggle the `isOn` state
  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn); // Toggle the state between true and false
  };

  return (
    <div>
      <h2>Toggle Button Example</h2>
      {/* Pass `isOn` and `handleToggle` as props */}
      <ToggleButton isOn={isOn} toggle={handleToggle} />
    </div>
  );
};

export default EighthComponent;
