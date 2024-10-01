import React, { useEffect, useState } from "react";
import Child1 from "./child-1";
import Child2 from "./child-2";

const ThirdComponent = () => {
  const [sharedName, setsharedName] = useState("oldsharedName");

  const changeSharedName = (newData) => {
    //pass the value from child for function definition
    setsharedName(newData);
  };
  //

  return (
    <>
      <p>
        When two or more siblings need to share or synchronize data, state is
        lifted. Suppose we want to update a state in child component 1 and print
        it to child component 2, since state is local to that component (child
        1) so child 2 cannot directly access it. So, we can pass the state from
        child 1 to its nearest parent and pass that state as props from the
        parent to child 2. Lets take this as the parent component.
      </p>
      <hr />
      <div>
        <p>{sharedName} in parent</p>
        <Child1 sharedName={sharedName} changeSharedName={changeSharedName} />
        <hr />
        <Child2 sharedName={sharedName} />
      </div>
    </>
  );
};

export default ThirdComponent;
