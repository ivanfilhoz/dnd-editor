import React from 'react'

const linkStyle: React.CSSProperties = {
  border: 0,
  background: 'none',
  color: 'blue',
  textDecoration: 'underline'
}

export const plugins = ['Style']

export default function ActiveLinkText ({ configuration }: any) {
  return <button style={linkStyle}>{configuration.text}</button>
}

ActiveLinkText.preview = () => <span style={linkStyle}>ActiveLinkText</span>

export const configTypes = {
  text: 'string',
  action: 'string',
  actionTarget: ['_self', '_blank']
}

export const defaultConfig = {
  text: 'ActiveLinkText'
}

export const description =
  'Use Active Text Links when an indicator is needed to quickly determine if data is present on an associated template.'
