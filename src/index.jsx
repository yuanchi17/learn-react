import { HashRouter, Switch, Route } from 'react-router-dom'
import Demo from './views/Demo'
import Home from './views/Home'
import Menu from './components/Menu'
import News from './views/News'
import NotFound from './views/NotFound'
import React from 'react'
import ReactDom from 'react-dom'

ReactDom.render(
  // 要輸出的東西
  <HashRouter>
    <Menu />
    <Switch>
      {/* 若加上 exact，路徑就必須一模一樣才會顯示 */}
      <Route exact path='/home' component={Home} />
      <Route path='/news' component={News} />
      <Route path='/demo' component={Demo} />
      <Route path='/' component={NotFound} />
    </Switch>
  </HashRouter>,
  document.getElementById('root') // 要輸出到哪個 DOM 裡面
)
