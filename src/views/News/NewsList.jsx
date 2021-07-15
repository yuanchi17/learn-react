import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React from 'react'

const mapStateToProps = state => ({
  news: state.news,
})

const List = props => (
  <ul>
    {props.news.map(news => (
      <li key={news.id}>
        <Link to={`/news/content/${news.id}`}>{news.title}</Link>
      </li>
    ))}
  </ul>
)

export default connect(mapStateToProps)(List)
