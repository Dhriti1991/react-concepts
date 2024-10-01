import React from "react";
import FifthChild from "./fifth-child";

const FifthComponent = () => {
  return (
    <div>
      <FifthChild name="Alice" age={25} isStudent={true} />
      {/* All props provided */}
      <FifthChild name="Bob" age={30} /> {/* 'isStudent' not provided */}
    </div>
  );
};

export default FifthComponent;
