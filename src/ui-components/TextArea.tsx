import React from 'react'

export default function TextArea ({ config }: any) {
  return (
    <textarea
      rows={config.rows}
      style={{ width: '100%', boxSizing: 'border-box' }}
      value={config.text}
    />
  )
}

export const preview = () => (
  <span style={{ border: '#333 1px solid', padding: 2, background: '#fff' }}>
    TextArea
  </span>
)

export const config = {
  text: 'string',
  rows: 'number'
}

export const defaultConfig = {
  rows: 3
}
