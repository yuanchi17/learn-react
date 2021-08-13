import _ from 'lodash'
import { addNewsObj } from '../../actions/news'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'

const Form = () => {
  const dispatch = useDispatch()
  const news = useSelector(state => state.news)
  const [tmpNews, setTmpNews] = useState({
    title: '',
    text: '',
  })

  const btnAdd = () => {
    dispatch(addNewsObj({
      id: _.get(_.maxBy(news, 'id'), 'id', 0) + 1,
      ...tmpNews,
    }))
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

export default Form
