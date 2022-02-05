import React from 'react'
import AtomWrapper, {
  atomWrapperConfig,
  atomWrapperDefaultConfig
} from '../ui-wrapper/AtomWrapper'

export default function Button ({ config }: any) {
  return (
    <AtomWrapper config={config}>
      <button>{config.text}</button>
    </AtomWrapper>
  )
}

export const preview = () => <button>Button</button>

export const config = {
  text: 'string',
  action: 'string',
  actionTarget: ['_self', '_blank'],
  ...atomWrapperConfig
}

export const defaultConfig = {
  text: 'Button',
  ...atomWrapperDefaultConfig
}

export const description =
  'Use Buttons to perform numerous actions such as launching templates and saving data.'

export const publish = (component: any) => {}
