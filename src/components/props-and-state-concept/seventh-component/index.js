import React, { useState } from "react";

const ChildCompForm = ({ initialName }) => {
  // Initialize state with the initial value of the prop
  const [name, setName] = useState(initialName);

  const handleChange = (e) => {
    setName(e.target.value); // Update state independently from the prop
  };

  return (
    <div>
      <h3>Enter Your Name:</h3>
      <input type="text" value={name} onChange={handleChange} />
      <p>Name: {name}</p>
    </div>
  );
};

// Parent component passing initial value as a prop
const SeventhComponent = () => {
  return (
    <div>
      <p>
        we will initialize the state based on the props when the component is
        first created. After initialization, the state works independently of
        the props.
        <br />
        Use Case: Imagine a form where the user can edit their name. The name is
        passed via props when the component is initialized, but once the user
        starts typing, the state operates independently of the original prop
        value.
      </p>
      <ChildCompForm initialName="John Doe" />;
    </div>
  );
};

export default SeventhComponent;

//we can also put two or more components in the same file, so here Parent: SeventhComponent and child: ChildCompForm
