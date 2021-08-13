import { Route, Switch, Link } from 'react-router-dom'
import React from 'react'
import DoneList from './DoneList.jsx'
import TodoList from './TodoList.jsx'

const Todo = ({ match }) => {
  console.log(match)
  return (
    <div>
      <h2>代辦清單</h2>
      <p>
        <span><Link to={`${match.url}/todo`}>未完成 </Link></span>
        <span><Link to={`${match.url}/done`}>已完成</Link></span>
      </p>
      <Switch>
        <Route
          component={TodoList}
          path={`${match.url}/todo`}
        />
        <Route
          component={DoneList}
          path={`${match.url}/done`}
        />
      </Switch>
    </div>
  )
}

export default Todo
