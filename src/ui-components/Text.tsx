import React from 'react'
import AtomWrapper, {
  atomWrapperConfig,
  atomWrapperDefaultConfig
} from '../ui-wrapper/AtomWrapper'

export default function Text ({ config }: any) {
  return (
    <AtomWrapper config={config}>
      <label>{config.text}</label>
    </AtomWrapper>
  )
}

export const preview = () => <span>Text</span>

export const config = {
  text: 'string',
  ...atomWrapperConfig
}

export const defaultConfig = {
  text: 'Text',
  ...atomWrapperDefaultConfig
}
