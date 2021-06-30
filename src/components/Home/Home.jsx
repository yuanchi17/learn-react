import React from 'react'
import HelloWord from '../HelloWord/HelloWord.jsx'

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
  </div>
)

export default Demo
