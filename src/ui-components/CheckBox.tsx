import React from 'react'

export const plugins = ['Style']

export default function CheckBox ({ configuration, path }: any) {
  const name = `checkbox-${path}`

  return (
    <>
      <input
        type='checkbox'
        name={name}
        checked={configuration.checked}
        readOnly
      />
      <label htmlFor={name}>{configuration.text}</label>
    </>
  )
}

CheckBox.preview = () => (
  <>
    <input type='checkbox' name='checkbox-preview' checked readOnly />
    <label htmlFor='checkbox-preview'>CheckBox</label>
  </>
)

export const configTypes = {
  text: 'string',
  checked: 'boolean',
  constraints: ['normal', 'readOnly', 'required']
}

export const defaultConfig = {
  text: 'CheckBox',
  constraints: 'normal'
}
