import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function NewPerson(props) {
  const [person, setPerson] = useState(props.newPerson);

  const savePerson = evt => {
    if (person.name === "") {
      return;
    }
    props.addPerson(person);
    evt.preventDefault();
  };

  useEffect(() => setPerson({ ...props.newPerson }), [props.newPerson]);

  const onChange = evt => {
    const value = evt.target.value;
    person.name = value;
    setPerson({ ...person });
  };

  const title = person.id === "" ? "Create new person" : "Edit person";
  return (
    <div>
      <h4>{title}</h4>
      <form>
        <input
          value={person.name}
          onChange={onChange}
          placeholder="Enter name"
        />
        <br />
        <br />
        <button onClick={savePerson} className="btn btn-info">
          Save
        </button>
      </form>
    </div>
  );
}

NewPerson.propTypes = {
  newPerson: PropTypes.object,
  addPerson: PropTypes.func
};
