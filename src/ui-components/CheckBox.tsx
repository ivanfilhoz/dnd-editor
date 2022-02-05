import React from 'react'
import AtomWrapper, {
  atomWrapperConfig,
  atomWrapperDefaultConfig
} from '../ui-wrapper/AtomWrapper'

export default function CheckBox ({ config, path }: any) {
  const name = `checkbox-${path}`

  return (
    <AtomWrapper config={config}>
      <input type='checkbox' name={name} checked={config.checked} readOnly />
      <label htmlFor={name}>{config.text}</label>
    </AtomWrapper>
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
  constraints: ['normal', 'readOnly', 'required'],
  ...atomWrapperConfig
}

export const defaultConfig = {
  text: 'CheckBox',
  constraints: 'normal',
  ...atomWrapperDefaultConfig
}

export const publishName = 'checkbox'
