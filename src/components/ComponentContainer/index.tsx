import clsx from 'clsx'
import React, { useCallback, useContext, useMemo } from 'react'
import { useDrag } from 'react-dnd'
import { AppContext } from '../../App'
import useComponent from '../../util/useComponent'
import useDeleteKey from '../../util/useDeleteKey'
import usePlugins from '../../util/usePlugins'
import useSelection from '../../util/useSelection'
import styles from './styles.module.css'

export default function ComponentContainer ({ item, path }: any) {
  const { selection, setSelection } = useContext(AppContext)
  const { Component, isContainer, plugins: pluginNames = [] } = useComponent(
    item.type
  )
  const plugins = usePlugins(pluginNames)
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

  const renderComponent = (pluginIndex = 0) => {
    const config = item.config || {}

    if (!plugins[pluginIndex]) {
      return <Component config={config} path={path} />
    }

    const { Wrapper = React.Fragment } = plugins[pluginIndex]
    return <Wrapper config={config}>{renderComponent(pluginIndex + 1)}</Wrapper>
  }

  return (
    <div
      ref={dragRef}
      className={clsx(styles.canvasItem, isContainer && styles.isContainer)}
      onClick={handleClick}
    >
      <React.Suspense fallback=''>{renderComponent()}</React.Suspense>
    </div>
  )
}
