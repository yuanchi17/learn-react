import HelloWord from '../../components/HelloWord/HelloWord.jsx'
import React from 'react'

const users = [
  { name: '琦怪欸' },
]

const Demo = props => (
  <div>
    {
      users.map(user => <HelloWord key={user.name} name={user.name}/>)
    }
  </div>
)

export default Demo
