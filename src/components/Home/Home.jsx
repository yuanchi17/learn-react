import React from 'react'
import HelloWord from '../HelloWord/HelloWord.jsx'
import Counter from '../Counter/Counter.jsx'

const users = [
  { name: '琦怪欸' },
]

const Demo = props => (
  <div>
    {
      users.map(user => <HelloWord key={user.name} name={user.name}/>)
    }
    <Counter/>
  </div>
)

export default Demo
