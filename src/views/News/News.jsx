import { Route, Switch } from 'react-router-dom'
import NewsContent from './NewsContent.jsx'
import NewsList from './NewsList.jsx'
import React from 'react'

const News = () => {
  return (
    <Switch>
      <Route exact path="/news" component={() => (
        <div>
          <h2>最新消息</h2>
          <NewsList/>
        </div>
      )}/>
      <Route
        path="/news/content/:id"
        component={props => <NewsContent match={props.match}/>}
      />
    </Switch>
  )
}

export default News
