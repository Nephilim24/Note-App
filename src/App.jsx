import { useState } from "react";
import { NavBar } from "./widgets/NavBar/NavBar.jsx";

const App = () => {

  const [searchMode, setSearchMode] = useState(false);

  return (
    <>
      <NavBar searchMode={searchMode} setSearchMode={setSearchMode} />
    </>
  );
}

export default App;