import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log('렌더링 수 : ', renderCount.current)
  });

  //-------------------------------------------------------------------
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef)
    inputRef.current.focus();
  }, [])

  const login = () => {
    alert(`환영합니다. ${inputRef.current.value}!`);
    inputRef.current.focus();
  }

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <div className="card">
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            올려
          </button>
          <p>-------------------------------------------------------</p>
          
        </div>
        <div className="card">
          <input ref={inputRef} type="text" placeholder="username"/>
          <button onClick={login}>로그인</button>
        </div>
      </div>
    </>
  );
}

export default App;
