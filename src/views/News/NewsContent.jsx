import _ from 'lodash'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React from 'react'

const Content = ({ match }) => {
  console.log(match)
  const history = useHistory()
  const news = useSelector(state => state.news)
  const btnNext = id => { history.push(`/news/content/${id}`) }

  let { id: index } = useParams()
  index = _.toSafeInteger(index)

  return (
  <div>
    <h3>你正在閱讀訊息</h3>
    <p>{news[index].text}</p>
    { !index ? null : <button onClick={() => btnNext(index - 1)}>上一篇</button> }
    { index === news.length - 1 ? null : <button onClick={() => btnNext(index + 1)}>下一篇</button> }
  </div>
  )
}

export default Content
