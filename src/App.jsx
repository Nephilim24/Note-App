import { useState } from "react";
import { NavBar } from "./widgets/NavBar/NavBar.jsx";
import Main from "./widgets/Main/Main.jsx"
import AddNoteButton from "./widgets/AddNoteButton/AddNoteButton.jsx";

const App = () => {

  const [searchMode, setSearchMode] = useState(false);
  const [notes, setNotes] = useState([]);

  return (
    <>
      <NavBar searchMode={searchMode} setSearchMode={setSearchMode} />
      <Main notes={notes} />
      <AddNoteButton/>
    </>
  );
}

export default App;