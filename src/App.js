import React from "react";
import "./App.css";
import NotesList from "./components/notes-list";
import AddNote from "./components/add-note";

function App() {
  return (
    <div className="App">
      <AddNote />
      <NotesList title="My notes list" testProp="hola!" />
    </div>
  );
}

export default App;
