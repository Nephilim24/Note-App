import './Modal.scss';

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      <div className={`modal ${showModal ? 'active' : ''}`}>
        <div className="modal__dialog">
          <h2>Добавить заметку</h2>
          <label htmlFor="note">
            <span>Заголовок</span>
            <input type="text" placeholder='Заголовок' />
          </label>
          <label htmlFor="note">
            <span>Заметка</span>
            <input type="text" placeholder='Заметка' />
          </label>
          <div className="modal__dialog-options">
            <button>Отмена</button>
            <button>Добавить</button>
          </div>
        </div>
      </div >
    </>
  )
}
export default Modal;