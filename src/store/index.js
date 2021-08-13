import _ from 'lodash'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import news from './news'
import todoList from './todoList'

const logger = store => next => action => {
  console.log(`執行: ${_.get(action, 'type', '未知')}`, action)
  console.log('執行前的 state:', store.getState())

  const result = next(action)

  console.log('執行後的 state:', store.getState())
  return result
}

const store = createStore(
  combineReducers({
    news,
    todoList,
  }),
  applyMiddleware(logger),
)

export default store
