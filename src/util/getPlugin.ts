export default async function getPlugin (pluginName: string) {
  const props: any = await import(`../ui-plugins/${pluginName}`)
  return {
    Wrapper: props.default,
    ...props
  }
}
