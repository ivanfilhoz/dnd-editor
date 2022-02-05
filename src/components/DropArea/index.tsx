import * as R from 'ramda'
import React, { useContext, useMemo } from 'react'
import { useDrop } from 'react-dnd'
import { AppContext } from '../../App'
import pathRemove from '../../util/pathRemove'
import ComponentContainer from '../ComponentContainer'
import styles from './styles.module.css'

interface IProps {
  path: string
}

export default function DropArea ({ path }: IProps) {
  const { canvas, setCanvas, setSelection } = useContext(AppContext)
  const parsedPath = useMemo(() => JSON.parse(path), [path])

  const containerLens = R.lensPath(parsedPath as string[])
  const container = useMemo(() => R.view(containerLens, canvas) || [], [
    containerLens,
    canvas
  ])

  const handleDrop = async ({ component, path }: any) => {
    if (
      path &&
      parsedPath.length &&
      R.startsWith(JSON.parse(path), parsedPath)
    ) {
      return
    }

    const { defaultConfig } = await import(
      `../../ui-components/${component.type}`
    )

    setCanvas!(canvas => {
      let newCanvas =
        !R.hasPath(parsedPath, canvas) && parsedPath.length
          ? R.assocPath(parsedPath, [], canvas)
          : canvas

      if (path) {
        newCanvas = pathRemove(JSON.parse(path), newCanvas)
      }

      const newContainer = [
        ...R.view(containerLens, newCanvas),
        {
          ...component,
          config: component.config || defaultConfig || {}
        }
      ]

      setSelection!([...parsedPath, newContainer.length - 1])

      return R.set(containerLens, newContainer, newCanvas)
    })
  }

  const [, dropRef] = useDrop(() => ({
    accept: ['toolitem', 'canvasitem'],
    drop: handleDrop,
    canDrop: (item, monitor) => monitor.isOver({ shallow: true })
  }))

  return (
    <div ref={dropRef} className={styles.dropArea} data-path={path}>
      {container.map((item: any, index: any) => (
        <ComponentContainer
          key={index}
          item={item}
          path={JSON.stringify([...parsedPath, index])}
        />
      ))}
    </div>
  )
}
