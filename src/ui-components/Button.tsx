import React from 'react'

export const plugins = ['Style']

export default function Button ({ config }) {
  return <button>{config.text}</button>
}

export const preview = () => (
  <span
    style={{
      border: '#333 1px solid',
      padding: '2px 8px',
      background: '#eee',
      borderRadius: 2
    }}
  >
    Button
  </span>
)

export const config = {
  text: 'string',
  action: 'string',
  actionTarget: ['_self', '_blank']
}

export const defaultConfig = {
  text: 'Button'
}

export const description =
  'Use Buttons to perform numerous actions such as launching templates and saving data.'

export const publishType = 'standard-action-button-primary'
