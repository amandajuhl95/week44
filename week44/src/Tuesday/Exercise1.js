import React, { useState, useEffect } from "react";
import "../App.css";

function Counter(props) {
  return (
    <div className="App">
      <h3>Exercise 1</h3>
      <p>{props.count}</p>
      <button onClick={() => props.setCount(props.count + props.amount)}>
        Count up
      </button>
      <button onClick={() => props.setCount(props.count - props.amount)}>
        Count down
      </button>
    </div>
  );
}

export default function App4() {
  const [count, setCount] = useState(parseInt(localStorage.getItem("count")));
  const amount = 5;

  useEffect(() => {
    localStorage.setItem("count", count);
  });

  return (
    <div className="App">
      <Counter count={count} setCount={setCount} amount={amount} />
    </div>
  );
}
