import NotesContainer from "./NotesContainer";
import "./Main.scss";
import { useState } from "react";

const Main = ({ notes, showEditModal, closeModal, title, descr, removeNote }) => {
  const [gridMode, setGridMode] = useState(false);
  return (
    <main notes={notes}>
      <NotesContainer
        gridMode={gridMode}
        setGridMode={setGridMode}
        notes={notes}
        showEditModal={showEditModal}
        removeNote={removeNote}
      />
    </main>
  )
}

export default Main;