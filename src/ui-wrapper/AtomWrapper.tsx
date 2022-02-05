import React from 'react'

export default function AtomWrapper ({ config, children }: any) {
  return <div style={{ textAlign: config.horizontalAlignment }}>{children}</div>
}

export const atomWrapperConfig = {
  horizontalAlignment: ['left', 'center', 'right']
}

export const atomWrapperDefaultConfig = {
  horizontalAlignment: 'left'
}
