import React from 'react'
import usePublish from '../../util/usePublish'
import ToolItem from '../ToolItem'
import styles from './styles.module.css'

const COMPONENTS = [
  'Grid',
  'Label',
  'Text',
  'Header',
  'TextArea',
  'ActiveLinkText',
  'Button',
  'CheckBox',
  'RadioButton'
]

export default function Toolbar () {
  const publish = usePublish()

  return (
    <div className={styles.toolbar}>
      {COMPONENTS.map(component => (
        <ToolItem key={component} component={component} />
      ))}
      <div className={styles.spacer} />
      <button onClick={publish}>Publish</button>
    </div>
  )
}
