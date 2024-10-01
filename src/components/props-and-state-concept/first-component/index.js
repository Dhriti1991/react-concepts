// Accordion.js
import React, { useState } from "react";
import ChildComponent from "./childcomponent";
import ChildComponent2 from "./childcomponent2";
// import "./home.css";

const FirstComponent = () => {
  const users = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Doe", age: 28 },
    { id: 3, name: "Alice Smith", age: 22 },
  ];
  return (
    <div className="">
      <h3>User List</h3>
      <hr />
      <ChildComponent userList={users} />
      <ChildComponent2 userList2={users} />
    </div>
  );
};

export default FirstComponent;
