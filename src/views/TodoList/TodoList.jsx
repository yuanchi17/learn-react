import _ from 'lodash'
import { DoneItem, DelItem } from '../../actions/todoList'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'

const TodoList = () => {
  const dispatch = useDispatch()
  const todoItems = _.get(useSelector(state => state.todoList), 'todoItems', [])

  return (
    <div id='todoList'>
      <h3>未完成</h3>
      <ul>
        {
          todoItems.map((item, i) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <button onClick={() => dispatch(DoneItem(i))}>完成</button>
              <button onClick={() => dispatch(DelItem(i))}>移除</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList
