import React from "react";

const FourtComponentChild = (props) => {
  const buttonClickFunctionChild = () => {
    props.buttonCLickFunction("Result"); // function call with argument
  };
  return (
    <>
      <button onClick={buttonClickFunctionChild}>Click me</button>
    </>
  );
};

export default FourtComponentChild;
