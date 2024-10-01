import React, { useState, useEffect } from "react";

const UseStateComponent = () => {
  const [counter, setCounter] = useState(0); //state for counter

  const [formData, setFormData] = useState([]); //state for form data (array)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const increment = () => setCounter(counter + 1); //update counter state
  const decrement = () => setCounter(counter - 1); //update counter state
  const reset = () => setCounter(0); //update counter state

  //   useEffect(() => {
  //     if (formData.length > 0) {
  //       console.log("Form submitted:", formData);
  //     }
  //   }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData((prevFormData) => [
      //update the form data with new items
      ...prevFormData,
      { name: name, email: email },
    ]);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <div style={{ marginTop: `20px` }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                // onChange={handleInputChange}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

                // onChange={handleInputChange}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
        {formData.map((item, index) => (
          <p>{item.email}</p>
        ))}
      </div>
    </div>
  );
};

export default UseStateComponent;
