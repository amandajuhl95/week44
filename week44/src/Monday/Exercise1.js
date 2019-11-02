import React from "react";
import upper, { text1, text2, text3 } from "./file1";
import "../App.css";

function App() {
  return (
    <div className="App">
      <h3>Exercise 1</h3>
      <p>{upper("please uppercase me")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
    </div>
  );
}

export default App;
