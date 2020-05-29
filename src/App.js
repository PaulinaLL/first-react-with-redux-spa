import React from "react";
import "./App.css";
import NotesList from "./components/notes-list";
import AddNote from "./components/add-note";
import DeleteNote from "./components/delete-note";

function App() {
  return (
    <div className="App">
      <AddNote />
      <NotesList title="My notes list" testProp="hola!" />
      <DeleteNote />
    </div>
  );
}

export default App;
