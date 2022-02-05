import React from 'react'
import AtomWrapper, {
  atomWrapperConfig,
  atomWrapperDefaultConfig
} from '../ui-wrapper/AtomWrapper'

export default function RadioButton ({ config, path }: any) {
  const name = `radio-${path}`

  return (
    <AtomWrapper config={config}>
      <input type='radio' name={name} checked={config.checked} readOnly />
      <label htmlFor={name}>{config.text}</label>
    </AtomWrapper>
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
  constraints: ['normal', 'readOnly', 'required'],
  ...atomWrapperConfig
}

export const defaultConfig = {
  text: 'RadioButton',
  constraints: 'normal',
  ...atomWrapperDefaultConfig
}

export const publishName = 'radio'
