import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const btnClick = () => {
    setCount((newCount, newProps) => newCount + 1)
    setCount((newCount, newProps) => newCount + 1)
  }

  useEffect(() => {
    console.log('「元件渲染完成」')
    console.log(`因第一次渲染畫面及 count 更新時觸發。count = ${count}`)
    return () => {
      console.log('「元件被移除前觸發 return」')
      console.log(`舊值為: ${count}`)
    }
  }, [count])

  return (
    <div>
      <p>點擊次數：{count}</p>
      <button onClick={btnClick}>點擊+2</button>
    </div>
  )
}

export default Counter
