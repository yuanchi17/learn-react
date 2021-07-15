import { Route, Switch } from 'react-router-dom'
import NewsList from './NewsList.jsx'
import NewsContent from './NewsContent.jsx'
import React, { useState } from 'react'

const News = () => {
  const [NewsItems] = useState([
    { id: 1, title: '我是新聞 1', text: '今天天氣晴' },
    { id: 2, title: '我是新聞 2', text: '齊心防疫，同島一心' },
    { id: 3, title: '我是新聞 3', text: '居家防疫' },
    { id: 4, title: '我是新聞 4', text: '希望疫情趕快結束！' },
  ])
  return (
    <Switch>
      <Route exact path="/news" component={() => (
        <div>
          <h2>最新消息</h2>
          <NewsList news={NewsItems}/>
        </div>
      )}/>
      <Route
        path="/news/content/:id"
        component={props => <NewsContent newsItems={NewsItems} match={props.match}/>}
      />
    </Switch>
  )
}

export default News
