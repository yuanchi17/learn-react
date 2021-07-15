import { useParams, useHistory } from 'react-router-dom'
import React from 'react'

const Content = ({ match, newsItems }) => {
  console.log(match)
  const history = useHistory()
  const btnNext = id => { history.push(`/news/content/${id}`) }

  let { id: newsId } = useParams()
  newsId = parseInt(newsId)
  const news = newsItems.find(news => parseInt(news.id) === newsId)

  return (
  <div>
    <h3>你正在閱讀訊息</h3>
    <p>{news.text}</p>
    { newsId === 1 ? null : <button onClick={() => btnNext(newsId - 1)}>上一篇</button> }
    { newsId === newsItems.length ? null : <button onClick={() => btnNext(newsId + 1)}>下一篇</button> }
  </div>
  )
}

export default Content
