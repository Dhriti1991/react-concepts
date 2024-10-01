import React, { useState } from "react";
import FourtComponentChild from "./fourth-comp-child";

const FourtComponent = () => {
  const [resultofClickInChild, setresultofClickInChild] = useState(""); // state initialization

  const buttonCLickFunction = (buttonClickResult) => {
    //function definition with parameter
    console.log(buttonClickResult);
    setresultofClickInChild(buttonClickResult); //function body
  };
  return (
    <>
      <p>Here:</p>
      <br />
      <p>
        1. Definition: "buttonCLickFunction" is defined in the ParentComponent.
        <br />
        2. Initialization: The function "buttonCLickFunction" is initialized
        when the parent component renders.
        <br />
        3. Call: "buttonCLickFunction" is called from the child when the button
        in child is clicked inside event handler "buttonClickFunctionChild",
        triggering a state update in the parent.
      </p>
      <div style={{ marginTop: `20px` }}>
        <FourtComponentChild buttonCLickFunction={buttonCLickFunction} />
        <br />
        <h4>
          The output of the button click in Child component is :{" "}
          {resultofClickInChild}
        </h4>
      </div>
    </>
  );
};

export default FourtComponent;
