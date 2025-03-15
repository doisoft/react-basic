import React, { useContext } from "react";
import '../App.css'
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

function Content() {
  const {isDark, setIsDark} = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>{user}, 좋은 하루 되세요</p>
    </div>
  );
}

export default Content;
