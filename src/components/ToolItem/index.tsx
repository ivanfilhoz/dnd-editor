import React from 'react'
import { useDrag } from 'react-dnd'
import useComponent from '../../util/useComponent'
import styles from './styles.module.css'

export default function ToolItem ({ component }: any) {
  const { Preview } = useComponent(component)

  const [, dragRef] = useDrag(() => ({
    type: 'toolitem',
    item: { type: component }
  }))

  return (
    <div className={styles.toolitem} ref={dragRef}>
      <Preview />
    </div>
  )
}
