import React, { useState, useEffect } from "react";
import "../App.css";

export default function App5() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(function() {
    const clear = setInterval(() => {
      setTime(time => new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      console.log("Cleaning up");
      clearInterval(clear);
    };
  });

  return (
    <div className="App">
      <h3>Exercise 2</h3>
      <Timer time={time} />
    </div>
  );
}

function Timer(props) {
  return <p>Time is: {props.time}</p>;
}
