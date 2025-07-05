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
  const [pickedNoteId, setPickedNoteId] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const localData = localStorage.getItem('notes');
    if (localData) {
      setNotes(JSON.parse(localData));
    }
  }, []);


  const addNote = () => {
    const note = {
      id: uuidv4(),
      title: title ? title : 'Нет заголовка',
      descr: descr ? descr : 'Нет заметки',
      date: new Date().toLocaleDateString(),
    };
    const allNotes = [...notes, note]
    localStorage.setItem('notes', JSON.stringify([...allNotes]));
    setNotes([...allNotes]);
    closeModal();
  }


  const showEditModal = (id) => {
    setModalEditMode(true);
    setShowModal(true);

    setPickedNoteId(id);
  }


  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setModalEditMode(false);
    }, 500);
  }


  const editNote = () => {
    if (pickedNoteId) {
      const editedNoteIndex = notes.findIndex(note => note.id == pickedNoteId);
      const note = {
        id: uuidv4(),
        title: title ? title : 'Нет заголовка',
        descr: descr ? descr : 'Нет заметки',
        date: new Date().toLocaleDateString(),
      };
      notes[editedNoteIndex] = note;
      const allNotes = [...notes]
      localStorage.setItem('notes', JSON.stringify([...allNotes]));
      setNotes([...notes]);
    }
    closeModal();
  }


  const removeNote = (index) => {
    notes.splice(index, 1);
    const allNotes = [...notes]
    localStorage.setItem('notes', JSON.stringify([...allNotes]));
    setNotes([...notes]);
  }


  const filteredNotes = notes.filter(note => note.title.includes(search) || note.descr.includes(search));

  return (
    <>
      <NavBar searchMode={searchMode} setSearchMode={setSearchMode} search={search} setSearch={setSearch} />
      <Main notes={filteredNotes} showEditModal={showEditModal} removeNote={removeNote} />
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
        setDescr={setDescr}
        editNote={editNote} />
    </>
  );
}

export default App;