import React from 'react'

export const plugins = ['Style']

export default function CheckBox ({ config, path }: any) {
  const name = `checkbox-${path}`

  return (
    <>
      <input type='checkbox' name={name} checked={config.checked} readOnly />
      <label htmlFor={name}>{config.text}</label>
    </>
  )
}

export const preview = () => (
  <>
    <input type='checkbox' name='checkbox-preview' checked readOnly />
    <label htmlFor='checkbox-preview'>CheckBox</label>
  </>
)

export const config = {
  text: 'string',
  checked: 'boolean',
  constraints: ['normal', 'readOnly', 'required']
}

export const defaultConfig = {
  text: 'CheckBox',
  constraints: 'normal'
}

export const publishName = 'checkbox-standard'
