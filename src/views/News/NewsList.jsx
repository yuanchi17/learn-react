import React from 'react'
import { Link } from 'react-router-dom'

const List = props => (
  <ul>
    {props.news.map(news => (
      <li key={news.id}>
        <Link to={`/news/content/${news.id}`}>{news.title}</Link>
      </li>
    ))}
  </ul>
)

export default List
