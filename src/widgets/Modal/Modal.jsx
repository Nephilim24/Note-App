import './Modal.scss';

const Modal = ({
  showModal,
  addNote,
  closeModal,
  modalEditMode,
  title, setTitle, descr, setDescr,
  editNote }) => {
  return (
    <>
      <div className={`modal ${showModal ? 'active' : ''}`} onClick={closeModal}>
        <div
          className="modal__dialog"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>{modalEditMode ? 'Изменить заметку' : 'Добавить заметку'}</h2>
          <label htmlFor="note">
            <span>Заголовок</span>
            <input id='title' type='text' placeholder='Заголовок'
              value={title} onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="note">
            <span>Заметка</span>
            <input id='note' type="text" placeholder='Заметка'
              value={descr} onChange={(e) => setDescr(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == 'Enter') {
                  addNote();
                };
              }}
            />
          </label>
          <div className="modal__dialog-options">
            <button onClick={closeModal}>Отмена</button>
            {
              modalEditMode ?
                <button onClick={editNote}>Изменить</button>
                :
                <button onClick={addNote}>Добавить</button>
            }
          </div>
        </div>
      </div >
    </>
  )
}
export default Modal;