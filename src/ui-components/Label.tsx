import React from 'react'
import AtomWrapper, {
  atomWrapperConfig,
  atomWrapperDefaultConfig
} from '../ui-wrapper/AtomWrapper'

export default function Label ({ config }: any) {
  return (
    <AtomWrapper config={config}>
      <label>{config.text}</label>
    </AtomWrapper>
  )
}

export const preview = () => <span>Label</span>

export const config = {
  text: 'string',
  ...atomWrapperConfig
}

export const defaultConfig = {
  text: 'Label',
  ...atomWrapperDefaultConfig
}
