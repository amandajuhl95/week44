let URL = "http://localhost:3456/api";

//The two methods below, are the utility-methods introduced here (use them if you like):
//https://docs.google.com/document/d/1hF9P65v_AJKCjol_gFkm3oZ1eVTuOKc15V6pcb3iFa8/edit?usp=sharing

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json"
    }
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  //OBSERVE This returns a promise, NOT the actual data, you must handle asynchronicity by the client

  async function getPersons() {
    const data = await fetch(URL).then(handleHttpErrors);
    return data;
  }

  async function addEditPerson(person) {
    if (person.id === "") {
      const options = makeOptions("POST", person);
      const data = await fetch(URL, options).then(handleHttpErrors);
      return data;
    } else {
      const options = makeOptions("PUT", person);
      const data = await fetch(URL + "/" + person.id, options).then(
        handleHttpErrors
      );
      return data;
    }
  }

  async function deletePerson(id) {
    const options = makeOptions("DELETE");
    await fetch(URL + "/" + id, options).then(handleHttpErrors);
  }

  return {
    getPersons,
    addEditPerson,
    deletePerson
  };
}

export default apiFacade();
