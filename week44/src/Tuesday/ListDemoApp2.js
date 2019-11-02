import React, { useState } from "react";
import "../App.css";

function MemberTable({ members }) {
  const memberRow = members.map((member, index) => (
    <MemberRow key={index} name={member.name} age={member.age} />
  ));
  return (
    <table id="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>{memberRow}</tbody>
    </table>
  );
}

function MemberRow(props) {
  return (
    <tr>
      <td> {props.name} </td>
      <td> {props.age} </td>
    </tr>
  );
}

function MemberDemo(props) {
  return (
    <div>
      <h3>Exercise 2</h3>
      <h4>All Members</h4>
      <MemberTable members={props.members} />
    </div>
  );
}

export default function App8() {
  const initialMembers = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }
  ];
  const [members] = useState(initialMembers);

  return <MemberDemo members={members} />;
}
