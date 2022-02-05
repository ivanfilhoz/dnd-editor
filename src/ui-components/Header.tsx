import React from 'react'

export const plugins = ['Style']

export default function Header ({ config }: any) {
  const Element: any = {
    'header-1': 'h1',
    'header-2': 'h2'
  }[config.headerStyle as string]

  return <Element>{config.text}</Element>
}

export const preview = () => <span style={{ fontWeight: 'bold' }}>Header</span>

export const config = {
  text: 'string',
  headerStyle: ['header-1', 'header-2']
}

export const defaultConfig = {
  text: 'Header',
  headerStyle: 'header-1'
}

export const publishName = 'header'
