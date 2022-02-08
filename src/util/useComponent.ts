import React, { useEffect, useState } from 'react'
import { COMPONENTS, COMPONENTS_MODULES } from './constants'

interface IComponentProps {
  configTypes?: {}
  defaultConfig?: {}
  isContainer?: boolean
  preview?: React.Component
  description?: React.Component
  plugins?: string[]
}

export default function useComponent (type: string) {
  const [props, setProps] = useState<IComponentProps>({})

  const Component = COMPONENTS[type] || React.Fragment

  const Preview = COMPONENTS[type]?.preview || React.Fragment

  useEffect(() => {
    if (type) {
      COMPONENTS_MODULES[type].then(module => {
        setProps(module || {})
      })
    } else {
      setProps({})
    }
  }, [setProps, type])

  return {
    Component,
    Preview,
    ...props
  }
}
