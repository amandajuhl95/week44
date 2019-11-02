import React, { useState, useEffect } from "react";
import "../App.css";

export default function App6() {
  const [joke, setJoke] = useState({ value: "" });
  const [chuckSelector, setChuckSelector] = useState(false);
  const [dadjoke, setDadJoke] = useState("");

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(joke => {
        setJoke(joke);
      })
      .catch(err => console.log("Ups Chuck Error" + err));
  }, [chuckSelector]);

  useEffect(() => {
    const clear = setInterval(
      () =>
        fetch("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "text/plain"
          }
        })
          .then(res => res.text())
          .then(dadjoke => {
            setDadJoke(dadjoke);
          })
          .catch(err => console.log("Ups Dad Error" + err)),
      10000
    );
    return () => {
      clearInterval(clear);
    };
  }, []);

  return (
    <div>
      <ChuckNorris
        joke={joke}
        setJoke={setJoke}
        chuckSelector={chuckSelector}
        setChuckSelector={setChuckSelector}
      />
      <DadJoke dadjoke={dadjoke} setDadJoke={setDadJoke} />
    </div>
  );
}

function ChuckNorris(props) {
  return (
    <div>
      <h3>Exercise 3</h3>
      <button onClick={() => props.setChuckSelector(!props.chuckSelector)}>
        Get ChuckNorris
      </button>
      <p>
        <i>Under 17 requires accompanying parent or adult guardian</i>
      </p>
      <p> Chuck Norris joke: {props.joke.value} </p>
    </div>
  );
}

function DadJoke(props) {
  return (
    <div>
      <p>Dad joke: {props.dadjoke} </p>
    </div>
  );
}
