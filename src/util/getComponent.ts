import { COMPONENTS, COMPONENTS_MODULES } from './constants'

export default async function getComponent (type: string) {
  const props: any = await COMPONENTS_MODULES[type]
  return {
    Component: COMPONENTS[type],
    Preview: COMPONENTS[type].preview,
    ...props
  }
}
