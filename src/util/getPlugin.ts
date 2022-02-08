import { PLUGINS, PLUGINS_MODULES } from './constants'

export default async function getPlugin (pluginName: string) {
  const props: any = await PLUGINS_MODULES[pluginName]
  return {
    Wrapper: PLUGINS[pluginName],
    ...props
  }
}
