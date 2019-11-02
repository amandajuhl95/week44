import React from "react";
import PropTypes from "prop-types";
import { names } from "./file2";
import "../App.css";

function Welcome(props) {
  return <p>Hello, {props.name}</p>;
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

function WelcomePerson({ person }) {
  return (
    <p>
      Hello {person.firstName} {person.lastName}, Email: {person.email}
    </p>
  );
}

WelcomePerson.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
};

export default function App3() {
  return (
    <div className="App">
      <h3>Exercise 3</h3>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />

      {/* <Welcome />
      <Welcome name={45} /> */}
      {/* <WelcomePerson person={names[0]} />
      <WelcomePerson person={names[1]} />
      <WelcomePerson person={names[2]} /> */}
      {/* <WelcomePerson person={names[3]} />
      <WelcomePerson person={names[4]} />
      <WelcomePerson person={names[5]} /> */}

      {names.map(person => (
        <WelcomePerson key={person.email} person={person} />
      ))}
    </div>
  );
}
