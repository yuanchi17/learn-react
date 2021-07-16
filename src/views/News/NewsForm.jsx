import { connect } from 'react-redux'
import React, { useState } from 'react'

const mapStateToProps = state => ({
  news: state.news,
})

const Form = ({ news, dispatch }) => {
  const [tmpNews, setTmpNews] = useState({
    title: '',
    text: '',
  })

  const btnAdd = () => {
    dispatch({
      type: 'ADD_NEWS',
      payload: {
        news: { id: news.length + 1, ...tmpNews },
      },
    })
  }

  return (
  <div>
    標題：
    <input type="text" value={tmpNews.title} onChange={(e) => { setTmpNews({ ...tmpNews, title: e.target.value }) }}/>
    內容：
    <input type="text" value={tmpNews.text} onChange={(e) => { setTmpNews({ ...tmpNews, text: e.target.value }) }}/>
    <button onClick={() => btnAdd()}>新增消息</button>
  </div>
  )
}

export default connect(mapStateToProps)(Form)
