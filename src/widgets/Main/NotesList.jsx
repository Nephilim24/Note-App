import NotesListItem from "./NotesListItem";

const NotesList = () => {
  return (
    <>
      <div className="notes__list container">
        <NotesListItem />
        <NotesListItem />
        <NotesListItem />
        <NotesListItem />
        <NotesListItem />
        <NotesListItem />
      </div>
    </>
  )
}

export default NotesList;