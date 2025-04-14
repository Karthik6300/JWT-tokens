import React from "react";
import { useState } from "react";
import "./src/App.css"; // Assuming you have a CSS file for styling

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color] = useState([
    "brown",
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "purple",
    "orange",
  ]);
  const [name] = useState([
    "brown",
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "purple",
    "orange",
  ]);

  function handleIncre() {
    setCount(count + 1);
  }

  function handleDecre() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  function handleChange(e) {
    console.log("karthik");
  }

  function handleForm(e) {
    console.log("karthik");
  }

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1
          className="counter-title"
          style={
            ({ color: `${color[count % color.length]}` },
            { backgroundColor: `${color[count % color.length]}` })
          }
        >
          Counter: {count} {name[count % name.length]}
        </h1>

        <div className="button-group">
          <button
            onClick={handleIncre}
            disabled={count >= 20}
            className="btn btn-increment"
          >
            Increment
          </button>

          <button
            onClick={handleReset}
            disabled={count <= 0}
            className="btn btn-reset"
          >
            Reset
          </button>

          <button
            onClick={handleDecre}
            disabled={count === 0}
            className="btn btn-decrement"
          >
            Decrement
          </button>
        </div>

        <div className="form-container">
          <h2 className="form-title">User Form</h2>
          <form onSubmit={handleForm}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter name"
                name="name"
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                name="password"
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <button type="submit" className="btn btn-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Counter;
