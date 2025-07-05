import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg"

const NotesListItem = ({ note, showEditModal, removeNote, index }) => {
  return (
    <>
      <div className="notes__list-item">
        <h5>{note.title}</h5>
        <span className="date">{note.date}</span>
        <p>{note.descr}</p>
        <div className="notes__list-item-options">
          <button onClick={() => showEditModal(note.id)}>
            <img src={editIcon} alt="" />
            <span className="edit">Редактировать</span>
          </button>
          <button onClick={() => removeNote(index)}>
            <img src={deleteIcon} alt="" />
            <span className="delete">Удалить</span>
          </button>
        </div>
      </div>
    </>
  )
}
export default NotesListItem;