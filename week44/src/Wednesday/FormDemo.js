import React, { useState } from "react";
import "../App.css";

const NameForm = () => {
  const [name, setName] = useState("");

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    setName(value);
  }

  function handleSubmit(event) {
    window.alert("Welcome " + name);
    event.preventDefault();
    setName("");
  }

  return (
    <div>
      <h3>Exercise 1</h3>
      <form onChange={handleChange}>
        <label>
          Name:
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Name"
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <p>{name}</p>
    </div>
  );
};

export default function FormDemo() {
  return (
    <div style={{ marginTop: 25 }}>
      <NameForm />
    </div>
  );
}
