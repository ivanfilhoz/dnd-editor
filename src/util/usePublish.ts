import * as R from 'ramda'
import { useContext } from 'react'
import { AppContext } from '../App'
import getPlugin from './getPlugin'

const map = R.addIndex(R.map)

export default function usePublish () {
  const { canvas, setResult } = useContext(AppContext)

  const transform = async (component, path) => {
    const { publishType, publish: customPublish, plugins = [] } = (await import(
      `../ui-components/${component.type}`
    )) as any

    if (customPublish) {
      component = await customPublish(component, path, publish)
    }

    for (const pluginName of plugins) {
      const plugin = await getPlugin(pluginName)

      if (plugin.publish) {
        component = await plugin.publish(component, path, publish)
      }
    }

    return R.pipe(
      R.assoc('id', generateId(path)),
      R.assoc('type', publishType || component.type)
    )(component)
  }

  const publish = async path => {
    const lens = R.lensPath(path)
    const list = R.view(lens, canvas) || []
    const transformedPromises = map(
      (component, index) => transform(component, [...path, index]),
      list
    ) as any

    return Promise.all(transformedPromises)
  }

  return async () => {
    const children = await publish(['root'])

    setResult({
      children
    })
  }
}

const generateId = (path: string[]) =>
  path.filter(_ => _ !== 'children').join('.')
