import { Route, Switch } from 'react-router-dom'
import NewsContent from './NewsContent.jsx'
import NewsForm from './NewsForm.jsx'
import NewsList from './NewsList.jsx'
import React from 'react'

const News = () => {
  return (
    <div>
      <h2>最新消息</h2>
      <Switch>
        <Route exact path="/news" component={() => (
          <div>
            <NewsForm/>
            <NewsList/>
          </div>
        )}/>
        <Route
          path="/news/content/:id"
          component={props => <NewsContent match={props.match}/>}
        />
      </Switch>
    </div>
  )
}

export default News
