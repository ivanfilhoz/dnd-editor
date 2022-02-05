import React from 'react'

export const plugins = ['Style']

export default function Text ({ config }: any) {
  return <label>{config.text}</label>
}

export const preview = () => <span>Text</span>

export const config = {
  text: 'string'
}

export const defaultConfig = {
  text: 'Text'
}
