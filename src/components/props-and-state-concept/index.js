// Accordion.js
import React, { useState } from "react";
import "./home.css";
import FirstComponent from "./first-component";
import SecondComponent from "./second-component";
import ThirdComponent from "./third-component";
import FourtComponent from "./fourth-component";
import FifthComponent from "./fifth-component";
import SixthComponent from "./sixth-component";
import SeventhComponent from "./seventh-component";
import EighthComponent from "./eighth-component";
import NinthComponent from "./ninth-component";

const accordionItems = [
  {
    title: "Passing Props between Components",
    question:
      "Create a parent component that passes data (like a list of items) as props to multiple child components. How can you pass an array of objects from a parent to a child component?",
    content: <FirstComponent />,
  },
  {
    title: "Props vs. State",
    question:
      "What is the difference between props and state, and when should you use each?",
    content:
      "--> Props are inputs containing data, array, function which are passed from the parent component to the child component, they cannot be changed in the child component. If suppose child needs to communicate back to parent then the parent must pass a function as a prop. --> State is a object that allows the component to maintain and manage their own internal data such as form data, api data, and also other variable data, they can be changed in that component and also can be passed as props.",
  },
  {
    title: "Updating State",
    question:
      "Implement a counter component where the state changes when a button is clicked.",
    content: <SecondComponent />,
  },
  {
    title: "State Lift-Up",
    question:
      "Build two sibling components that need to share some data. Lift the state to their parent component and pass it down as props. Why and how would you 'lift state up' in a React app?",
    content: <ThirdComponent />,
  },
  {
    title: "Passing Functions as Props",
    question:
      "Create a parent component that passes a function as a prop to a child component. Let the child call this function when a button is clicked.How can a child component invoke a function defined in the parent component?",
    content: <FourtComponent />,
  },
  {
    title: "Props Validation",
    question: "Use PropTypes to validate the props passed to a component.",
    content: <FifthComponent />,
  },
  {
    title: "Derived State from Props",
    question:
      "Create a component that derives some state based on the props it receives. What are the use cases and potential pitfalls of deriving state from props?",
    content: <SixthComponent />,
  },
  {
    title: "State Initialization",
    question:
      "Build a form component where the state initializes with values passed as props.",
    content: <SeventhComponent />,
  },
  {
    title: "Rendering Based on Props",
    question:
      "Create a component that renders different elements based on the props it receives (e.g., a toggle button). How can you conditionally render different elements based on prop values?",
    content: <EighthComponent />,
  },
  {
    title: "Stateful Lists",
    question:
      "Create a list component where each item has its own state (e.g., a list of tasks where each task can be marked as completed). How can you manage state for each item in a list of dynamic elements?",
    content: <NinthComponent />,
  },
];

const HomePropsState = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <h1>Props and State Concepts</h1>
      <div className="accordion">
        {accordionItems.map((item, index) => (
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
                <p style={{ width: `80%` }}>
                  <span style={{ fontWeight: `bold`, paddingRight: `5px` }}>
                    {item.title}:{" "}
                  </span>
                  {item.question}
                </p>
              </div>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            <div
              className={`accordion-content ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <div>{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePropsState;
