import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import React from 'react'

// const mapStateToProps = state => ({
//   news: state.news,
// })

const Content = ({ match }) => {
  console.log(match)
  const history = useHistory()
  const news = useSelector(state => state.news)
  const btnNext = id => { history.push(`/news/content/${id}`) }

  let { id: newsId } = useParams()
  newsId = parseInt(newsId)
  const nowNews = news.find(n => parseInt(n.id) === newsId)

  return (
  <div>
    <h3>你正在閱讀訊息</h3>
    <p>{nowNews.text}</p>
    { newsId === 1 ? null : <button onClick={() => btnNext(newsId - 1)}>上一篇</button> }
    { newsId === news.length ? null : <button onClick={() => btnNext(newsId + 1)}>下一篇</button> }
  </div>
  )
}

export default Content
