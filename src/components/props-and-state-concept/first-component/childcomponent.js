import React, { useEffect, useState } from "react";
// import "./home.css";

const ChildComponent = ({ userList }) => {
  return (
    <div>
      <p>Child Component 1 containing Names:</p>
      {userList.map((item) => (
        <div key={item.id}>
          <p> {item.name}</p>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default ChildComponent;
