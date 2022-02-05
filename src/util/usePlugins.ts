import { useEffect, useState } from 'react'
import getPlugin from './getPlugin'

export default function usePlugins (pluginNames: any[] = []) {
  const [plugins, setPlugins] = useState<any[]>([])
  const serializedPluginNames = JSON.stringify(pluginNames)

  useEffect(() => {
    ;(async function () {
      const _pluginNames = JSON.parse(serializedPluginNames) as string[]
      const importedPlugins = await Promise.all(_pluginNames.map(getPlugin))
      setPlugins(importedPlugins)
    })()
  }, [serializedPluginNames])

  return plugins
}
