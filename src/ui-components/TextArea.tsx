import React from 'react'

export default function TextArea ({ configuration }: any) {
  return (
    <textarea
      rows={configuration.rows}
      style={{ width: '100%', boxSizing: 'border-box' }}
      value={configuration.text}
      readOnly
    />
  )
}

TextArea.preview = () => (
  <span
    style={{
      border: '#333 1px solid',
      padding: '2px 8px 2px 2px',
      background: '#fff'
    }}
  >
    TextArea
  </span>
)

export const configTypes = {
  text: 'string',
  rows: 'number'
}

export const defaultConfig = {
  text: '',
  rows: 3
}
