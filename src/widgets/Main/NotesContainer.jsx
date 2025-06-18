import listIcon from "../../assets/icons/list.svg";
import gridIcon from "../../assets/icons/grid.svg";
import NotesList from "./NotesList";

const NotesContainer = ({ gridMode, setGridMode }) => {
  return (
    <section className="notes">
      <div className="notes__header container">
        <h2>Все заметки</h2>
        <button onClick={() => setGridMode((prev) => !prev)}>
          <img src={gridMode ? gridIcon : listIcon} alt="" />
          <span>{gridMode ? 'Список' : 'Сетка'}</span>
        </button>
      </div>
      <NotesList />
    </section >
  )
}

export default NotesContainer;