import React from "react";
import PropTypes from "prop-types";

const AllPersons = ({ persons, editPerson, deletePerson }) => {
  return (
    <React.Fragment>
      <div>
        <h4>All persons</h4>
        <ul>
          {persons.map(person => (
            <li key={person.id}>
              {person.name}
              <a href="#/" onClick={() => deletePerson(person.id)}>
                {" "}
                (delete{" "}
              </a>
              <a href="#/" onClick={() => editPerson(person.id)}>
                , edit){" "}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default AllPersons;

AllPersons.propTypes = {
  persons: PropTypes.array
};
