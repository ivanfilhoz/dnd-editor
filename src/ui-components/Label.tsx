import React from 'react'

export const plugins = ['Style']

export default function Label ({ config }: any) {
  return <label>{config.text}</label>
}

export const preview = () => <span>Label</span>

export const config = {
  text: 'string'
}

export const defaultConfig = {
  text: 'Label'
}
