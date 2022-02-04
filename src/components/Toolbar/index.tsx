import React from 'react'
import ToolItem from '../ToolItem'
import styles from './styles.module.css'

const COMPONENTS = ['Button', 'Label', 'TextArea', 'Grid']

export default function Toolbar () {
  return (
    <div className={styles.toolbar}>
      {COMPONENTS.map(component => (
        <ToolItem key={component} component={component} />
      ))}
    </div>
  )
}
