import { Route, Switch } from 'react-router-dom'
import NewsList from './NewsList.jsx'
import NewsContent from './NewsContent.jsx'
import React from 'react'

const News = () => (
  <Switch>
    <Route exact path="/news" component={() => (
      <div>
        <h2>最新消息</h2>
        <NewsList />
      </div>
    )}/>
    <Route path="/news/content/:id" component={NewsContent}/>

  </Switch>
)

export default News
