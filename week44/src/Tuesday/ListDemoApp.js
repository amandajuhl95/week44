import React, { useState, useEffect } from "react";
import "../App.css";

function ListItem(props) {
  return <li> {props.value} </li>;
}

function TableItems(props) {
  return (
    <tr>
      <td> {props.value} </td>
    </tr>
  );
}

function NumberList({ numbers }) {
  console.log("--NUMBERS -->", numbers);
  const listItems = numbers.map(n => <ListItem key={n} value={n} />);
  return <ul>{listItems}</ul>;
}

function NumberTable({ numbers }) {
  const tableItems = numbers.map(n => <TableItems key={n} value={n} />);
  return (
    <table id="table">
      <tbody>{tableItems}</tbody>
    </table>
  );
}

function ListDemo(props) {
  console.log(props.numbers);
  return (
    <div>
      <h3>Exercise 1</h3>
      <h4>All numbers passed in via props</h4>
      <NumberList numbers={props.numbers} />
      <NumberTable numbers={props.numbers} />
    </div>
  );
}
export default function App7() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);

  useEffect(function() {
    const add = setInterval(() => {
      numbers.push(numbers[numbers.length - 1] + 1);
      setNumbers([...numbers]);
    }, 5000);
    return () => {
      clearInterval(add);
    };
  });

  return <ListDemo numbers={numbers} />;
}
