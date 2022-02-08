import React from 'react'

export const plugins = ['Style']

export default function RadioButton ({ configuration, path }: any) {
  const name = `radio-${path}`

  return (
    <>
      <input
        type='radio'
        name={name}
        checked={configuration.checked}
        readOnly
      />
      <label htmlFor={name}>{configuration.text}</label>
    </>
  )
}

RadioButton.preview = () => (
  <>
    <input type='radio' name='radio-preview' checked readOnly />
    <label htmlFor='radio-preview'>RadioButton</label>
  </>
)

export const configTypes = {
  text: 'string',
  checked: 'boolean',
  constraints: ['normal', 'readOnly', 'required']
}

export const defaultConfig = {
  text: 'RadioButton',
  constraints: 'normal'
}
