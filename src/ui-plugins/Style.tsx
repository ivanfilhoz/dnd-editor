import React from 'react'

export default function Style ({ config, children }: any) {
  return <div style={{ textAlign: config.horizontalAlignment }}>{children}</div>
}

export const config = {
  horizontalAlignment: ['left', 'center', 'right']
}

export const defaultConfig = {
  horizontalAlignment: 'left'
}

export const publish = (component: any, config: any) => ({
  ...component,
  css: {
    textAlign: config.horizontalAlignment
  }
})
