import React, { useState, useEffect, useMemo } from 'react'
import useCounter from '../../hooks/useCounter'

const Title = React.memo(() => {
  console.log('渲染 Title 元件')
  return (
    <div>
      <h2>挖喜 Title</h2>
    </div>
  )
}, (oldProps, newProps) => {
  return true // 回傳 false 還是會重新渲染
})

const Counter = () => {
  const [text, setText] = useState('')
  const { count, onAdd } = useCounter(0, () => { console.log('useCounter +10') })

  useEffect(() => { console.log('執行 Counter') }, [count])

  const updateText = useMemo(() => {
    console.log('updateText')
    return `您已輸入：${text}`
  }, [text])

  return (
    <div>
      <Title />
      <div>
        <p>{updateText}</p>
        <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
      </div>
      <p>count：{count}</p>
      <button onClick={() => onAdd(10)}>點擊+10</button>
    </div>
  )
}

export default Counter
