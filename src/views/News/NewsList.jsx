import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const List = () => {
  const [NewsItems] = useState([
    { id: 1, title: '我是新聞 1', text: '今天天氣晴' },
    { id: 2, title: '我是新聞 2', text: '齊心防疫，同島一心' },
    { id: 3, title: '我是新聞 3', text: '居家防疫' },
    { id: 4, title: '我是新聞 4', text: '希望疫情趕快結束！' },
  ])

  return (<ul>
    {NewsItems.map(news => (
      <li key={news.id}>
        <Link to={`/news/content/${news.id}`}>{news.title}</Link>
      </li>
    ))}
  </ul>)
}

export default List
