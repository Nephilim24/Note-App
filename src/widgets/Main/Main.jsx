import NotesContainer from "./NotesContainer";
import "./Main.scss";
import { useState } from "react";

const Main = () => {
  const [gridMode, setGridMode] = useState(false);
  return (
    <main>
      <NotesContainer gridMode={gridMode} setGridMode={setGridMode}></NotesContainer>
    </main>
  )
}

export default Main;