import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg"

const NotesListItem = () => {
  return (
    <>
      <div className="notes__list-item">
        <h5>Title</h5>
        <p className="date">07.03.2022</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <div className="notes__list-item-options">
          <button>
            <img src={editIcon} alt="" />
            <span className="edit">Редактировать</span>
          </button>
          <button>
            <img src={deleteIcon} alt="" />
            <span className="delete">Удалить</span>
          </button>
        </div>
      </div>
    </>
  )
}
export default NotesListItem;