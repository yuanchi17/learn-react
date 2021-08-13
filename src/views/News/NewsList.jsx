import { delNewsObj } from '../../actions/news'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'

const List = () => {
  const news = useSelector(state => state.news)
  const dispatch = useDispatch()
  return (
    <ul>
      {
        news.map(n => (
          <li key={n.id}>
            <Link to={`/news/content/${n.id}`}>{n.title}</Link>
            <button onClick={() => dispatch(delNewsObj(n.id)) }>刪除</button>
          </li>
        ))
      }
    </ul>
  )
}

export default List
