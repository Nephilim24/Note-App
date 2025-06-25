import { useEffect, useState } from "react";
import { NavBar } from "./widgets/NavBar/NavBar.jsx";
import Main from "./widgets/Main/Main.jsx"
import AddNoteButton from "./widgets/AddNoteButton/AddNoteButton.jsx";
import Modal from "./widgets/Modal/Modal.jsx";


const App = () => {

  const [searchMode, setSearchMode] = useState(false);
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <NavBar searchMode={searchMode} setSearchMode={setSearchMode} />
      <Main notes={notes} />
      <AddNoteButton showModal={showModal} setShowModal={setShowModal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default App;