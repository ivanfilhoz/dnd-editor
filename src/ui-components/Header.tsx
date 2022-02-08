import React from 'react'

export const plugins = ['Style']

export default function Header ({ configuration }: any) {
  const Element: any = {
    'header-1': 'h1',
    'header-2': 'h2'
  }[configuration.headerStyle as string]

  return <Element>{configuration.text}</Element>
}

Header.preview = () => <span style={{ fontWeight: 'bold' }}>Header</span>

export const configTypes = {
  text: 'string',
  headerStyle: ['header-1', 'header-2']
}

export const defaultConfig = {
  text: 'Header',
  headerStyle: 'header-1'
}
