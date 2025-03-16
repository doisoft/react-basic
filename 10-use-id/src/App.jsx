import { useState } from 'react'
import './App.css'
import { useId } from 'react'

function App() {
  

  return (
    <div>
      <MyInput />
      <MyInput />
    </div>
  )
}

function MyInput() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>이름</label>
      <input id={id} />
    </div>
  )
}

export default App
