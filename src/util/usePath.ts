import * as R from 'ramda'
import { useCallback, useContext, useMemo } from 'react'
import { AppContext } from '../App'
import pathRemove from './pathRemove'

export default function usePath (path: any) {
  const { canvas, setCanvas, setSelection } = useContext(AppContext)
  const parsedPath = useMemo(() => JSON.parse(path), [path]) as string[]

  const lens = R.lensPath(parsedPath)

  const component = R.view(lens, canvas)

  const setComponent = useCallback(
    component => {
      setCanvas!(R.set(lens, component, canvas))
    },
    [canvas, setCanvas, lens]
  )

  const deleteComponent = useCallback(() => {
    setSelection!(null)
    setCanvas!(pathRemove(parsedPath, canvas!))
  }, [setSelection, parsedPath, setCanvas, canvas])

  return {
    component,
    setComponent,
    deleteComponent
  }
}
