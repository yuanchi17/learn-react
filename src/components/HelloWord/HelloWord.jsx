import React from 'react'
import styles from './index.scss'

const Demo = ({ name }) => (
  <div className={styles.title}>{`Hello ${!name ? 'What your name?' : name}`}</div>
)

export default Demo
