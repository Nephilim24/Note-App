import { useEffect, useState } from "react";
import { NavBar } from "./widgets/NavBar/NavBar.jsx";
import Main from "./widgets/Main/Main.jsx"
import AddNoteButton from "./widgets/AddNoteButton/AddNoteButton.jsx";
import Modal from "./widgets/Modal/Modal.jsx";
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [searchMode, setSearchMode] = useState(false);
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalEditMode, setModalEditMode] = useState(false);
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');

  const addNote = () => {
    const note = {
      id: uuidv4(),
      title: title ? title : 'Нет заголовка',
      descr: descr ? descr : 'Нет заметки',
      date: new Date().toLocaleDateString(),
    }
    setNotes([...notes, note]);
    closeModal();
  }

  const showEditModal = () => {
    setModalEditMode(true);
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setModalEditMode(false);
    }, 500);
  }

  const removeNote = (index) => {
    notes.splice(index, 1);
    setNotes([...notes]);
  }

  return (
    <>
      <NavBar searchMode={searchMode} setSearchMode={setSearchMode} />
      <Main notes={notes} showEditModal={showEditModal} removeNote={removeNote} />
      <AddNoteButton showModal={showModal} setShowModal={setShowModal} />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        addNote={addNote}
        modalEditMode={modalEditMode}
        closeModal={closeModal}
        title={title}
        setTitle={setTitle}
        descr={descr}
        setDescr={setDescr} />
    </>
  );
}

export default App;