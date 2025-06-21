import NotesContainer from "./NotesContainer";
import "./Main.scss";
import { useState } from "react";

const Main = ({notes}) => {
  const [gridMode, setGridMode] = useState(false);
  return (
    <main notes={notes}>
      <NotesContainer
        gridMode={gridMode}
        setGridMode={setGridMode}
        notes={notes}

      />
    </main>
  )
}

export default Main;