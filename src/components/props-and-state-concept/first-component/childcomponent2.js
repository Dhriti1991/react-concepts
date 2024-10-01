import React, { useEffect, useState } from "react";
// import "./home.css";

const ChildComponent2 = (props) => {
  return (
    <div>
      <p>Child Component 2 containing Ages:</p>
      {props.userList2.map((item) => (
        <div key={item.id}>
          <p> {item.age}</p>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default ChildComponent2;
