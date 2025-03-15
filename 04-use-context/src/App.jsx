import { useState } from "react";
import Page from "./pages/Page";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
  );
}

export default App;
