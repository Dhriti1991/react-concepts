// Accordion.js
import React, { useState } from "react";
import "./reactHook.css";
import UseStateComponent from "./usestate-component";
import UseEffectComponent from "./useeffect-component";
import UseMemoComponent from "./usememo-component";
import UsecallBackComponent from "./usecallback-component";
import UseRefComponent from "./useref-component";
import UseContextComponent from "./usecontext-component";
import UseReducerComponent from "./usereducer-component";

const accordionItemshooks = [
  {
    title: "useState – basic state management",

    content: <UseStateComponent />,
  },
  {
    title: "useEffect – handling side effects like data fetching.",
    content: <UseEffectComponent />,
  },
  {
    title: "useMemo – memoizing expensive calculations.",
    content: <UseMemoComponent />,
  },
  {
    title: "useCallback – memoizing functions.",
    content: <UsecallBackComponent />,
  },
  {
    title: "useRef – accessing DOM elements.",
    content: <UseRefComponent />,
  },
  {
    title: "useContext – avoiding prop drilling.",
    content: <UseContextComponent />,
  },
  {
    title: "useReducer – managing complex state logic.",
    content: <UseReducerComponent />,
  },
  {
    title: "Custom Hooks – reusing logic across components.",
    content:
      "Custom hooks in React are reusable functions that encapsulate logic that can be shared across multiple components. They allow you to extract and reuse common stateful logic, reducing redundancy and keeping your code cleaner and more organized.",
  },
];

const HomeReactHooks = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <h1>React Hooks Concepts</h1>
      <div className="accordion">
        {accordionItemshooks.map((accordionItemshooks, index) => (
          <div key={index} className="accordion-item">
            <div
              className={`accordion-title ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => onTitleClick(index)}
            >
              <div style={{ display: `flex` }}>
                <p style={{ display: `flex`, paddingRight: `10px` }}>
                  Q. {index + 1}
                </p>
                <p>
                  <span style={{ fontWeight: `bold`, paddingRight: `5px` }}>
                    {accordionItemshooks.title}:{" "}
                  </span>
                </p>
              </div>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            <div
              className={`accordion-content ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <div>{accordionItemshooks.content}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeReactHooks;
