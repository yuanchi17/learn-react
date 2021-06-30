import React from 'react'
import ReactDom from 'react-dom'
import Home from './components/Home'

ReactDom.render(
  <Home />, // 要輸出的畫面
  document.getElementById('root') // 要輸出到哪個 DOM 裡面
)
