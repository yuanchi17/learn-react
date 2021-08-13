import _ from 'lodash'
import { addNewsObj } from '../../actions/news'
import { connect } from 'react-redux'
import React, { useState } from 'react'

const mapStateToProps = state => ({
  news: state.news,
})

const mapDispatchToProps = dispatch => ({
  addNews: news => {
    dispatch(addNewsObj(news))
  },
})

const Form = ({ news, addNews }) => {
  const [tmpNews, setTmpNews] = useState({
    title: '',
    text: '',
  })

  const btnAdd = () => {
    addNews({
      id: _.get(_.maxBy(news, 'id'), 'id', 0) + 1,
      ...tmpNews,
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

export default connect(mapStateToProps, mapDispatchToProps)(Form)
