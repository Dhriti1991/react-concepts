import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./homecomponent.css";

const HomeComponent = () => {
  return (
    <>
      <div className="homeDiv">
        <div className="homeDivChild">
          <NavLink to="/props-state">React Props and State Concepts</NavLink>
        </div>
        <div className="homeDivChild">
          <NavLink to="/react-hooks">React Hooks Concept</NavLink>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
