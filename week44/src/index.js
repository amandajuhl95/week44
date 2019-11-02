import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Monday/Exercise1";
import App2 from "./Monday/Exercise2";
import App3 from "./Monday/Exercise3";
import App4 from "./Tuesday/Exercise1";
import App5 from "./Tuesday/Exercise2";
import App6 from "./Tuesday/Exercise3";
import App7 from "./Tuesday/ListDemoApp";
import App8 from "./Tuesday/ListDemoApp2";
import FormDemo from "./Wednesday/FormDemo";
import ReservationForm from "./Wednesday/FormDemoMultiple";
import App9 from "./Wednesday/ToDo/App";
import App10 from "./Wednesday/LiftingState/App";

let app = <App />;

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      <br></br>
      <h3>Monday</h3>
      <a href="/" className="x" id="app1">
        Exercise 1
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app2">
        Exercise 2
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app3">
        Exercise 3
      </a>{" "}
      &nbsp;
      <br></br>
      <h3>Tuesday</h3>
      <a href="/" className="x" id="app4">
        Exercise 1
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app5">
        Exercise 2
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app6">
        Exercise 3
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app7">
        List Demo 1
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app8">
        List Demo 2
      </a>{" "}
      <br></br>
      <h3>Wednesday</h3>
      &nbsp;
      <a href="/" className="x" id="app9">
        Form Demo 1
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app10">
        Form Demo 2
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app11">
        Lifting State 1
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app12">
        Lifting State 2
      </a>{" "}
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  );
};

function handleSelect(event) {
  event.preventDefault();
  if (event.target.className !== "x") {
    return;
  }
  const id = event.target.id;
  switch (id) {
    case "app1":
      app = <App />;
      break;
    case "app2":
      app = <App2 />;
      break;
    case "app3":
      app = <App3 />;
      break;
    case "app4":
      app = <App4 />;
      break;
    case "app5":
      app = <App5 />;
      break;
    case "app6":
      app = <App6 />;
      break;
    case "app7":
      app = <App7 />;
      break;
    case "app8":
      app = <App8 />;
      break;
    case "app9":
      app = <FormDemo />;
      break;
    case "app10":
      app = <ReservationForm />;
      break;
    case "app11":
      app = <App9 />;
      break;
    case "app12":
      app = <App10 />;
      break;
  }

  ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
