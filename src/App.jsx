import { useState } from "react";
import { NavBar } from "./widgets/NavBar/NavBar.jsx";
import Main from "./widgets/Main/Main.jsx"

const App = () => {

  const [searchMode, setSearchMode] = useState(false);

  return (
    <>
      <NavBar searchMode={searchMode} setSearchMode={setSearchMode} />
      <Main />
    </>
  );
}

export default App;