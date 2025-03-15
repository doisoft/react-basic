import { useCallback, useState } from "react";
import "./App.css";
import Box from "./Box";

function App() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "red",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  const handleChangeSize = (e) => {
    setSize(e.target.value);
  };

  return (
    <div style={{backgroundColor: isDark ? 'black' : 'white'}}>
      <input type="number" value={size} onChange={handleChangeSize} />
      <button onClick={() => {setIsDark(!isDark)}}>changeTheme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}

export default App;
