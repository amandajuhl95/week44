import React from "react";
import PropTypes from "prop-types";

const PersonRows = ({ person, editPerson, deletePerson }) => {
  return (
    <tr>
      <td> {person.age} </td>
      <td> {person.name} </td>
      <td> {person.gender} </td>
      <td> {person.email} </td>
      <td>
        (
        <a
          href="xx"
          onClick={e => {
            e.preventDefault();
            editPerson(person);
          }}
        >
          edit
        </a>
        ,
        <a
          href="xx"
          onClick={e => {
            e.preventDefault();
            deletePerson(person.id);
          }}
        >
          delete)
        </a>
      </td>
    </tr>
  );
};

export default function AllPersons(props) {
  const { persons, editPerson, deletePerson } = props;
  const tableItems = persons.map(person => (
    <PersonRows
      key={person.id}
      person={person}
      deletePerson={deletePerson}
      editPerson={editPerson}
    />
  ));

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Age</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{tableItems}</tbody>
      </table>

      <p>Please make me show all persons in the table above</p>
      <p>Also, update me when new items are added/edited </p>
    </div>
  );
}

AllPersons.propTypes = {
  persons: PropTypes.array.isRequired,
  editPerson: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired
};
