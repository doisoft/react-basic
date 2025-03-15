import React, { memo } from 'react'

function Child({name, tellMe}) {

    console.log('👶자녀 컴포넌트 렌더링 발생')
    
  return (
    <div style={{border: '2px solid navy', padding: '18px'}}>
      <h1>👶자녀</h1>
      <p>성: {name.lastName}</p>
      <p>이름: {name.firstName}</p>
      <button onClick={tellMe}>엄마 나 사랑해??</button>

    </div>
  )
}

export default memo(Child)