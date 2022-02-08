import React from 'react'
import { COMPONENTS } from '../../util/constants'
import ToolItem from '../ToolItem'
import styles from './styles.module.css'

export default function Toolbar () {
  return (
    <div className={styles.toolbar}>
      {Object.keys(COMPONENTS).map(component => (
        <ToolItem key={component} component={component} />
      ))}
    </div>
  )
}
