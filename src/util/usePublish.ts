import * as R from 'ramda'
import { useContext } from 'react'
import { AppContext } from '../App'
import { COMPONENTS_MODULES } from './constants'
import getPlugin from './getPlugin'

const map = R.addIndex(R.map)

export default function usePublish () {
  const { canvas, setCanvas, result, setResult } = useContext(AppContext)

  const transform = async (component, path) => {
    const { publish: customPublish, plugins = [] } = await COMPONENTS_MODULES[
      component.type
    ]

    if (customPublish) {
      component = await customPublish(component, path, publish)
    }

    for (const pluginName of plugins) {
      const plugin = await getPlugin(pluginName)

      if (plugin.publish) {
        component = await plugin.publish(component, path, publish)
      }
    }

    return {
      id: generateId(path),
      ...component
    }
  }

  const untransform = async (component, path) => {
    const { load: customLoad, plugins = [] } = await COMPONENTS_MODULES[
      component.type
    ]

    if (customLoad) {
      component = await customLoad(component, path, load)
    }

    for (const pluginName of plugins) {
      const plugin = await getPlugin(pluginName)

      if (plugin.load) {
        component = await plugin.load(component, path, load)
      }
    }

    return component
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

  const load = async path => {
    const lens = R.lensPath(path)
    const list = R.view(lens, result) || []
    const transformedPromises = map(
      (component, index) => untransform(component, [...path, index]),
      list
    ) as any

    return Promise.all(transformedPromises)
  }

  return {
    publish: async () => {
      const children = await publish(['root'])

      setResult({
        children
      })
    },
    load: async () => {
      const root = await load(['children'])

      setCanvas({
        root
      })
    }
  }
}

const generateId = (path: string[]) =>
  path.filter(_ => _ !== 'children').join('.')
