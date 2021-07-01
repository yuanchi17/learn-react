import React from 'react'
import HelloWord from '../HelloWord/HelloWord.jsx'
import Counter from '../Counter/Counter.jsx'

const users = [
  { name: 'Chi' },
  { name: '' },
  { name: 'Lily' },
  { name: 'Ann' },
]

const Demo = props => (
  <div>
    {
      users.map(user => <HelloWord key={user.name} name={user.name}/>)
    }
    <Counter/>
    <Counter/>
  </div>
)

export default Demo
