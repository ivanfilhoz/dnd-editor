import React from 'react'

export const plugins = ['Style']

export default function Label ({ configuration }: any) {
  return <label>{configuration.text}</label>
}

Label.preview = () => <span>Label</span>

export const configTypes = {
  text: 'string'
}

export const defaultConfig = {
  text: 'Label'
}
