import React, { useState, useContext, createContext } from "react";
import "./reactHook.css";

// Create a new context for the theme
const ThemeContext = createContext();

// ThemeProvider component to manage and provide the theme state
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // State to hold the current theme, default is 'light'

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light"); // Function to toggle between light and dark themes

  return (
    // Provide the current theme and toggle function to the context
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ThemeButton component that consumes the theme context
const ThemeButton = () => {
  // Use the context to get the current theme and toggle function
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={theme === "light" ? "light-theme" : "dark-theme"}
    >
      Current Button Theme: {theme}
    </button>
  );
};

// ThemeText component that consumes the theme context
const ThemeText = () => {
  // Use the context to get the current theme
  const { theme } = useContext(ThemeContext);

  return (
    <p className={theme === "light" ? "light-theme" : "dark-theme"}>
      UnseContext allows sharing data across components without prop drilling.
      Prop drilling is the process of passing data from a parent component to
      child components through multiple layers of the component tree in React.
    </p>
  );
};

// This is the new component where you can use the theme context
const UseContextComponent = () => {
  return (
    <ThemeProvider>
      {/* Wrap the application with ThemeProvider */}
      {/* Render the ThemeButton and ThemeText inside the provider */}
      <ThemeText />
      <ThemeButton />
    </ThemeProvider>
  );
};

export default UseContextComponent;
