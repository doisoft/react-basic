import { useEffect, useState } from "react";
import Timer from "./Timer";
import "./App.scss";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="container">
      {showTimer && <Timer />}
      <div className="row">
        <button onClick={() => {setShowTimer(!showTimer)}}>Togle Timer</button>
      </div>
    </div>
  );
}

export default App;
