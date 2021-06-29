import React from 'react'
import ReactDom from 'react-dom'
import HelloWord from './components/HelloWord'

ReactDom.render(
  <HelloWord />, // 要輸出的畫面
  document.getElementById('root') // 要輸出到哪個 DOM 裡面
)
