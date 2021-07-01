import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const btnClick = () => {
    setCount((newCount, newProps) => newCount + 1)
    setCount((newCount, newProps) => newCount + 1)
  }
  return (
    <div>
      <p>點擊次數：{count}</p>
      <button onClick={btnClick}>點擊+2</button>
    </div>
  )
}

export default Counter
