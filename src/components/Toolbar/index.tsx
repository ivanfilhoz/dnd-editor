import React from 'react'
import { COMPONENTS } from '../../util/constants'
import usePublish from '../../util/usePublish'
import ToolItem from '../ToolItem'
import styles from './styles.module.css'

export default function Toolbar () {
  const publish = usePublish()

  return (
    <div className={styles.toolbar}>
      {Object.keys(COMPONENTS).map(component => (
        <ToolItem key={component} component={component} />
      ))}
      <div className={styles.spacer} />
      <button onClick={publish}>Publish</button>
    </div>
  )
}
