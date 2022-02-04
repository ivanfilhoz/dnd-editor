import React, { useEffect, useState } from 'react'

interface IComponentProps {
  config?: {}
  defaultConfig?: {}
  isContainer?: boolean
  preview?: React.Component
}

export default function useComponent (type: string) {
  const [props, setProps] = useState<IComponentProps>({})

  const Component = type
    ? React.lazy(() => import(`../ui-components/${type}`))
    : () => <></>

  const Preview = type
    ? React.lazy(() =>
        import(`../ui-components/${type}`).then(module => ({
          default: module.preview
        }))
      )
    : () => <></>

  useEffect(() => {
    if (type) {
      import(`../ui-components/${type}`).then(module => {
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
