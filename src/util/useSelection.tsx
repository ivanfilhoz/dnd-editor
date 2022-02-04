import { useContext, useMemo } from 'react'
import { AppContext } from '../App'
import usePath from './usePath'

export default function useSelection () {
  const { selection: _ } = useContext(AppContext)
  const selection = useMemo(() => (Array.isArray(_) ? _ : [_!]), [_])

  return usePath(JSON.stringify(selection))
}
