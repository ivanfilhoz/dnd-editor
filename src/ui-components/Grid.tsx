import React, { useMemo } from 'react'
import DropArea from '../components/DropArea'

export default function Grid ({ config: { rows = 1, cols = 1 }, path }: any) {
  const parsedPath = useMemo(() => JSON.parse(path), [path])

  return (
    <div
      data-path={JSON.stringify(path)}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        height: '100%',
        padding: 1,
        boxSizing: 'border-box'
      }}
    >
      {Array.from(Array(rows * cols).keys()).map(cell => (
        <div
          data-key={cell}
          key={cell}
          style={{ margin: 1, border: '#aaa 1px dashed' }}
        >
          <DropArea path={JSON.stringify([...parsedPath, 'children', cell])} />
        </div>
      ))}
    </div>
  )
}

export const preview = () => (
  <span style={{ border: '#aaa 1px dashed', padding: 2 }}>Grid</span>
)

export const config = {
  rows: 'number',
  cols: 'number'
}

export const defaultConfig = {
  rows: 2,
  cols: 2
}

export const isContainer = true

export const publish = (component: any) => {}
