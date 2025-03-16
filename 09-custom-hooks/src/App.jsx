import { useState } from 'react'

import './App.css'
import { useInput } from './useInput'
import { useFetch } from './useFetch';

function displayMessage(message) {
  alert(message);
}

const baseUrl = 'https://jsonplaceholder.typicode.com'

function App() {
  const [inputValue, handleChange, handleSubmit] = useInput('', displayMessage)

  const { data: userData } = useFetch(baseUrl, 'users');
  const { data: postData } = useFetch(baseUrl, 'posts');
  const { data: todoData } = useFetch(baseUrl, 'todos');

  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange}/>
      <button onClick={handleSubmit}>확인</button>
      <hr />
      <h1>useFetch</h1>
      <h5>users</h5>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      <h5>post</h5>
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
      <h5>todo</h5>
      {todoData && <pre>{JSON.stringify(todoData[0], null, 2)}</pre>}
    </div>
  );
}

export default App
