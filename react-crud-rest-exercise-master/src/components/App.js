import React, { useState, useEffect } from "react";
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";

function App({ apiFacade }) {
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };
  const [personToAddEdit, setPersonToAddEdit] = useState(emptyPerson);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await apiFacade.getPersons();
        setPersons(data);
      } catch (error) {
        alert("UPSSS " + error);
      }
    };
    getData();
  }, [apiFacade]);

  const storeAddEditPerson = async person => {
    //Call this from the AddEditPerson control with the person to Add or Edit and Add/Edit via the apiFacade
    try {
      const newPerson = await apiFacade.addEditPerson(person);
      personToAddEdit.id = newPerson.id;
      const data = await apiFacade.getPersons();
      setPersons(data);
      setPersonToAddEdit({ ...emptyPerson });
    } catch (error) {
      alert("UPSSS " + error);
    }
  };

  const deletePerson = async id => {
    try {
      await apiFacade.deletePerson(id);
      const data = await apiFacade.getPersons();
      setPersons(data);
    } catch (error) {
      alert("UPSSS " + error);
    }
  };

  const editPerson = person => {
    try {
      setPersonToAddEdit({ ...person });
    } catch (error) {
      alert("UPSSS " + error);
    }

    //Call this from the AllPerson control with the person to edit
    //Set the state variable personToAddEdit with this person (a clone) to make the new value flow down via props
  };

  const cancel = () => {
    try {
      setPersonToAddEdit({ ...emptyPerson });
    } catch (error) {
      alert("UPSSS " + error);
    }
  };

  const title = personToAddEdit.id === "" ? "Add person" : "Edit person";
  return (
    <div className="container">
      <div className="row">
        <h3>CRUD Demo </h3>
        <div className="col-md-7">
          <h3>All Persons</h3>
          <AllPersons
            persons={persons}
            editPerson={editPerson}
            deletePerson={deletePerson}
          />
        </div>
        <div className="col-md-5">
          <h3 style={{ textAlign: "center" }}>{title}</h3>
          <AddEditPerson
            newPerson={personToAddEdit}
            cancel={cancel}
            //  Next two lines, are if you decide to use the pattern introduced in the day-2 exercises
            addEditPerson={storeAddEditPerson}
            key={personToAddEdit.id}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
