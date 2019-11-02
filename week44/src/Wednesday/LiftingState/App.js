import React, { useState } from "react";
import "../App.css";
import uuid from "uuid/v1";
import AllPersons from "./AllPersons";
import NewPerson from "./NewPerson";

export default function App10() {
  const initialData = [
    { id: uuid(), name: "Amanda" },
    { id: uuid(), name: "Amalie" },
    { id: uuid(), name: "Benjamin" }
  ];

  const [persons, setPersons] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: "", name: "" });

  const addEditPerson = person => {
    if (person.id === "") {
      person.id = uuid();
      persons.push(person);
    } else {
      let personToEdit = persons.find(p => p.id === person.id);
      personToEdit.name = person.name;
    }
    setPersons([...persons]);
    setNewPerson({ id: "", name: "" });
  };

  const editPerson = index => {
    setNewPerson(persons.find(p => p.id === index));
  };

  const deletePerson = index => {
    setPersons(persons.filter(event => event.id !== index));
  };

  return (
    <div>
      <AllPersons
        persons={persons}
        editPerson={editPerson}
        deletePerson={deletePerson}
      />
      <NewPerson newPerson={newPerson} addEditPerson={addEditPerson} />
    </div>
  );
}
