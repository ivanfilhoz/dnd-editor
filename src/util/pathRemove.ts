import * as R from 'ramda'

export default function pathRemove (path: string[], obj: object) {
  const parentPath = R.init(path)
  const parentLens = R.lensPath(parentPath)
  const parent = R.view(parentLens, obj)
  const newParent = R.remove(R.last(path) as any, 1, parent)
  return R.set(parentLens, newParent, obj)
}
