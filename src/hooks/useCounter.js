import { useEffect, useState } from 'react'

const useCounter = (initCount, callbackFunction) => {
  // 將共用邏輯拆分成一個函式，較乾進&好維護
  const [count, setCount] = useState(initCount)

  useEffect(callbackFunction, [count])

  const onAdd = n => {
    setCount(count + n)
  }

  return { count, onAdd }
}

export default useCounter
