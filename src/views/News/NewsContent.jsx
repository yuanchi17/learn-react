import React from 'react'

const Content = props => {
  console.log(props.match)
  const id = props.match.params.id
  const news = props.news.find(news => String(news.id) === String(id))
  return (
  <div>
    <h3>你正在閱讀訊息</h3>
    <p>{news.text}</p>
  </div>
  )
}

export default Content
