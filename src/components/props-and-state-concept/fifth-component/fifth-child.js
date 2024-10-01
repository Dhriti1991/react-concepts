import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

// Define the component
const FifthChild = ({ name, age, isStudent }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      <p>Status: {isStudent ? "Student" : "Not a Student"}</p>
    </div>
  );
};

// Define the prop types using PropTypes
FifthChild.propTypes = {
  name: PropTypes.string.isRequired, // 'name' must be a string and is required
  age: PropTypes.number.isRequired, // 'age' must be a number and is required otherwise warning in devtool will come
  isStudent: PropTypes.bool, // 'isStudent' must be a boolean (optional)
};

// Define default props for optional props
FifthChild.defaultProps = {
  isStudent: false, // Defaults to 'Not a Student' if 'isStudent' is not passed
};

export default FifthChild;
