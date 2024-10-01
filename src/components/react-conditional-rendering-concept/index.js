import React, { useEffect, useState } from "react";

const TernaryOperatorComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [age, setAge] = useState(12); // New state for age

  // Function to toggle login status and set the message
  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  // Effect to update the message based on isLoggedIn and age
  useEffect(() => {
    const ageCategory =
      age < 12 ? "Child" : age >= 12 && age <= 20 ? "Teenager" : "Adult";

    setMessage(
      isLoggedIn
        ? `Welcome back! You are classified as: ${ageCategory}`
        : "Please log in."
    );
  }, [isLoggedIn, age]);

  return (
    <div>
      <h3>Ternary Operator Example</h3>

      <button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>

      <p>{message}</p>

      {/* Option to change age for demonstration */}
      {isLoggedIn ? (
        <></>
      ) : (
        <div>
          <label>
            Set Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              min="0"
            />
          </label>
        </div>
      )}
    </div>
  );
};

// LogicalAndComponent.js
const LogicalAndComponent = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      <h3>Logical AND (&&) Example</h3>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>
      <button onClick={() => setIsAdmin(!isAdmin)}>Toggle Admin Status</button>
      {showMessage && <p>{isAdmin ? "Hello, Admin!" : "Hello, User!"}</p>}
    </div>
  );
};

// SwitchCaseComponent.js
const SwitchCaseComponent = () => {
  const [role, setRole] = useState("guest");

  const renderRoleMessage = (role) => {
    switch (role) {
      case "admin":
        return <p>You have full access.</p>;
      case "editor":
        return <p>You can edit content.</p>;
      case "viewer":
        return <p>You can view content.</p>;
      default:
        return <p>Welcome, Guest!</p>;
    }
  };

  return (
    <div>
      <h3>Switch Case Example</h3>
      <select onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="guest">Guest</option>
        <option value="admin">Admin</option>
        <option value="editor">Editor</option>
        <option value="viewer">Viewer</option>
      </select>
      {renderRoleMessage(role)}
    </div>
  );
};

const HomeReactConditionalRendering = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Conditional Rendering Examples</h1>
      <hr />
      <TernaryOperatorComponent />
      <LogicalAndComponent />
      <SwitchCaseComponent />
    </div>
  );
};

export default HomeReactConditionalRendering;

// export default HomeReactConditionalRendering;
