import React, { useState } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";

const App: React.FC = () => {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "princess", last: "Diana" },
  ];

  return (
    <div className="App">
      <Greet name="Akshay" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Oscar>
        <Heading>Oscar goes to Akshay Raichur</Heading>
      </Oscar>
      <Button handleClick={(event, id) => console.log("Button clicked", event, id)}></Button>
      <Input value="hi there" handleChange={(e) => console.log("input changed", e.target.value)} />
      <Container styles={{ border: "1px solid red", padding: "2rem" }} />
    </div>
  );
};

export default App;
