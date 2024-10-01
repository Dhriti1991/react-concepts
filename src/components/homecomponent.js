import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./homecomponent.css";

const HomeComponent = () => {
  return (
    <>
      <div className="homeDiv">
        <NavLink
          to="/props-state"
          className="homeDivChild"
          style={{ textDecoration: `none`, color: `#000000` }}
        >
          React Props and State Concepts
        </NavLink>
        <NavLink
          to="/react-hooks"
          className="homeDivChild"
          style={{ textDecoration: `none`, color: `#000000` }}
        >
          React Hooks Concept
        </NavLink>
        <NavLink
          to="/react-conditional-rendering"
          className="homeDivChild"
          style={{ textDecoration: `none`, color: `#000000` }}
        >
          React Conditional Rendering Concepts
        </NavLink>
      </div>
    </>
  );
};

export default HomeComponent;
