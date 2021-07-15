import { useParams, useHistory } from 'react-router-dom'
import React from 'react'

const Content = ({ match, newsItems }) => {
  console.log(match)
  const history = useHistory()
  const btnNext = id => { history.push(`/news/content/${id}`) }

  let { id: newsId } = useParams()
  newsId = parseInt(newsId)
  const news = newsItems.find(news => parseInt(news.id) === newsId)
  const back = newsId === 1 ? '' : newsId - 1
  const next = newsId === newsItems.length ? '' : newsId + 1

  return (
  <div>
    <h3>你正在閱讀訊息</h3>
    <p>{news.text}</p>
    {!back ? null : <button onClick={() => btnNext(back)}>上一篇</button>}
    {!next ? null : <button onClick={() => btnNext(next)}>下一篇</button>}
  </div>
  )
}

export default Content
