import { connect } from 'react-redux'
import { delNewsObj } from '../../actions/news'
import { Link } from 'react-router-dom'
import React from 'react'

const mapStateToProps = state => ({
  news: state.news,
})

const mapDispatchToProps = dispatch => ({
  delNews: nid => {
    dispatch(delNewsObj(nid))
  },
})

const List = props => (
  <ul>
    {props.news.map(news => (
      <li key={news.id}>
        <Link to={`/news/content/${news.id}`}>{news.title}</Link>
        <button onClick={() => props.delNews(news.id)}>刪除</button>
      </li>
    ))}
  </ul>
)

export default connect(mapStateToProps, mapDispatchToProps)(List)
