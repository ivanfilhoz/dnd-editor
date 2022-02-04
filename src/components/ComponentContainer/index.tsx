import clsx from 'clsx'
import React, { useCallback, useContext, useMemo } from 'react'
import { useDrag } from 'react-dnd'
import { AppContext } from '../../App'
import useComponent from '../../util/useComponent'
import useDeleteKey from '../../util/useDeleteKey'
import useSelection from '../../util/useSelection'
import styles from './styles.module.css'

export default function ComponentContainer ({ item, path }: any) {
  const { selection, setSelection } = useContext(AppContext)
  const { Component, isContainer } = useComponent(item.type)
  const { deleteComponent } = useSelection()
  const parsedPath = useMemo(() => JSON.parse(path), [path])

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    setSelection!(parsedPath)
  }

  const onPressDelete = useCallback(() => {
    if (JSON.stringify(selection) === path) {
      deleteComponent()
    }
  }, [selection, path, deleteComponent])

  useDeleteKey(onPressDelete)

  const [, dragRef] = useDrag(() => ({
    type: 'canvasitem',
    item: { component: item, path }
  }))

  return (
    <div
      ref={dragRef}
      className={clsx(styles.canvasItem, isContainer && styles.isContainer)}
      onClick={handleClick}
    >
      <React.Suspense fallback=''>
        <Component config={item.config || {}} path={path} />
      </React.Suspense>
    </div>
  )
}
