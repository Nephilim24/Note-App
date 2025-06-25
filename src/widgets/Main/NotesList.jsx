import NotesListItem from "./NotesListItem";

const NotesList = ({ gridMode, notes }) => {
  return (
    <>
      <div className={`notes__list container ${gridMode ? '' : 'list'}`}>
        {
          notes.map((note, index) => (
            <NotesListItem key={index} note={note} />
          ))
        }
      </div>
    </>
  )
}

export default NotesList;