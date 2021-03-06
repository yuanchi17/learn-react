import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <ul>
      <li><Link to='/home'>首頁</Link></li>
      <li><Link to='/demo'>練習區</Link></li>
      <li><Link to='/news'>最新消息</Link></li>
      <li><Link to='/todoList'>代辦清單</Link></li>
    </ul>
  )
}

export default Menu
