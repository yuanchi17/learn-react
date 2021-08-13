import _ from 'lodash'
import { useSelector } from 'react-redux'
import React from 'react'

const DoneList = () => {
  const doneItems = _.get(useSelector(state => state.todoList), 'doneItems', [])

  return (
    <div id='doneList'>
      <h3>已完成 讚！</h3>
      <ul>
        {
          doneItems.map((item, i) => (
            <li key={item.id}>
              <p>{item.title}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default DoneList
