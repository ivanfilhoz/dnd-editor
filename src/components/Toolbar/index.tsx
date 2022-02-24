import React from 'react'
import { COMPONENTS_GROUPS } from '../../util/constants'
import styles from './styles.module.css'
import ToolbarGroup from './ToolbarGroup'

export default function Toolbar () {
  return (
    <div className={styles.toolbar}>
      {Object.keys(COMPONENTS_GROUPS).map(groupName => (
        <ToolbarGroup groupName={groupName} />
      ))}
    </div>
  )
}
