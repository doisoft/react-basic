import { useCallback, useMemo, useState } from 'react'
import './App.css'
import Child from './Child';

function App() {
  const [parentAge, setParentAge] = useState(0);
  const incrementParentAge = () => {
    setParentAge(parentAge + 1)
  }

  console.log('👫부모 컨포넌트 렌더링 발생')

  const tellMe = useCallback(() => {
    console.log('길동아 사랑해.')
  }, []);

  const name = useMemo(() => {
    return {
      lastName: '홍',
      firstName: '길동',
    }
  }, [])

  return (
    <div style={{border: '2px solid navy', padding: '18px'}}>
      <h1>👬부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={name} tellMe={tellMe}/>
    </div>
  )
}

export default App
