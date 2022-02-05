import React from 'react'
import AtomWrapper, {
  atomWrapperConfig,
  atomWrapperDefaultConfig
} from '../ui-wrapper/AtomWrapper'

export default function Header ({ config }: any) {
  const Element: any = {
    'header-1': 'h1',
    'header-2': 'h2'
  }[config.headerStyle as string]

  return (
    <AtomWrapper config={config}>
      <Element>{config.text}</Element>
    </AtomWrapper>
  )
}

export const preview = () => <span style={{ fontWeight: 'bold' }}>Header</span>

export const config = {
  text: 'string',
  headerStyle: ['header-1', 'header-2'],
  ...atomWrapperConfig
}

export const defaultConfig = {
  text: 'Header',
  headerStyle: 'header-1',
  ...atomWrapperDefaultConfig
}

export const publishName = 'header'
