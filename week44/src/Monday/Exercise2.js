import React from "react";
import person, { males, females } from "./file2";
import "../App.css";

const { firstName, email } = person;

const combined1 = [...males, ...females];
const combined2 = [...males, firstName, "Helle", ...females, "Tina"];
console.log(combined1);
console.log(combined2);

const personV2 = { ...person, friends: combined1, phone: 123456 };

console.log(personV2);

export default function App2() {
  return (
    <div>
      <h3>Exercise 2</h3>
      <p>
        Firstname: {firstName}, Email: {email}
      </p>
    </div>
  );
}
