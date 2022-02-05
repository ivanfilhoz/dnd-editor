import React from 'react'

export const plugins = ['Style']

export default function RadioButton ({ config, path }: any) {
  const name = `radio-${path}`

  return (
    <>
      <input type='radio' name={name} checked={config.checked} readOnly />
      <label htmlFor={name}>{config.text}</label>
    </>
  )
}

export const preview = () => (
  <>
    <input type='radio' name='radio-preview' checked readOnly />
    <label htmlFor='radio-preview'>RadioButton</label>
  </>
)

export const config = {
  text: 'string',
  checked: 'boolean',
  constraints: ['normal', 'readOnly', 'required']
}

export const defaultConfig = {
  text: 'RadioButton',
  constraints: 'normal'
}

export const publishName = 'radio'
