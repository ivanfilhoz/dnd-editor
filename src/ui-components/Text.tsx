import React from 'react'

export const plugins = ['Style']

export default function Text ({ configuration }: any) {
  return <label>{configuration.text}</label>
}

Text.preview = () => <span>Text</span>

export const configTypes = {
  text: 'string'
}

export const defaultConfig = {
  text: 'Text'
}
