import React from 'react'

export default function Style ({ configuration, children }: any) {
  return (
    <div style={{ textAlign: configuration.horizontalAlignment }}>
      {children}
    </div>
  )
}

export const configTypes = {
  horizontalAlignment: ['left', 'center', 'right']
}

export const defaultConfig = {
  horizontalAlignment: 'left'
}

export const publish = component => ({
  ...component,
  css: {
    textAlign: component.configuration.horizontalAlignment
  }
})
