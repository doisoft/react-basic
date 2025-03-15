import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";

function App() {
  // 1. Step
  const [time, setTime] = useState(1);
  const handleClick = () => {
    console.log('handleClick!!')
    let newTime;

    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };
  console.log('업데이트!!')

  // 2. Step
  const [names, setNames] = useState(['홍길동', '김천술'])
  const [input, setInput] = useState('');
  const handleInputChange = (e) => {
    setInput(e.target.value)
  }
  const handleUpload = (e) => {
    setNames((prevState) => {
      return [input, ...prevState]
    })
  }
  

  // 3. Step
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 1964,
    color: "red",
  });

  const updateColor = () => {
    console.log('updateColor!!')
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <>
      <div className="container">
        {/* 1. Step */}
        <div className="row">
          <span>현재 시각: {time}</span>
          <button type="button" onClick={handleClick}>
            Update
          </button>
        </div>

        {/* 2. Step */}
        <div className="row">
          <input type="text" value={input} onChange={handleInputChange}/>
          <button onClick={handleUpload}>Upload</button>
          {names.map((name, idx) => {
            return <p key={idx}>{name}</p>
          })}
        </div>

        {/* 3. Step */}
        <div className="row">
          <h1>My car color is {car.color}!</h1>
          <h2>My {car.brand}</h2>
          <h5>
            It is a {car.color} {car.model} from {car.year}
          </h5>
          <button type="button" onClick={updateColor}>
            Blue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
