import React, { useEffect, useState } from "react";

const Child1 = (props) => {
  const updatesharedName = () => {
    //when we click this event then all the values of sharedName changes in the all the components that shares it
    props.changeSharedName("newsharedName"); //pass the value as an argument to the props (function call), in this way we can change the props value in parent from child
  };
  return (
    <>
      <div>
        <p>{props.sharedName} in Child 1</p>
        <button onClick={updatesharedName}>Change the sharedName</button>
      </div>
    </>
  );
};

export default Child1;
