import React from 'react'
import AtomWrapper, {
  atomWrapperConfig,
  atomWrapperDefaultConfig
} from '../ui-wrapper/AtomWrapper'

const linkStyle: React.CSSProperties = {
  border: 0,
  background: 'none',
  color: 'blue',
  textDecoration: 'underline'
}

export default function ActiveLinkText ({ config }: any) {
  return (
    <AtomWrapper config={config}>
      <button style={linkStyle}>{config.text}</button>
    </AtomWrapper>
  )
}

export const preview = () => <span style={linkStyle}>ActiveLinkText</span>

export const config = {
  text: 'string',
  action: 'string',
  actionTarget: ['_self', '_blank'],
  ...atomWrapperConfig
}

export const defaultConfig = {
  text: 'ActiveLinkText',
  ...atomWrapperDefaultConfig
}

export const description =
  'Use Active Text Links when an indicator is needed to quickly determine if data is present on an associated template.'

export const publish = (component: any) => {}
