import React from 'react'
import useComponent from '../../util/useComponent'
import usePlugins from '../../util/usePlugins'
import useSelection from '../../util/useSelection'
import Field from './Field'
import styles from './styles.module.css'

export default function PropertiesPanel () {
  const { component } = useSelection()
  const { config, description, plugins: pluginNames = [] } = useComponent(
    component?.type
  )
  const plugins = usePlugins(pluginNames)
  const configTypes: any = config || {}

  return (
    <div className={styles.propertiesPanel}>
      <h2>Properties {component && `of ${component.type}`}</h2>
      {description && <p>{description}</p>}
      <hr />
      <div className={styles.form}>
        {Object.keys(configTypes).map(field => (
          <Field key={field} name={field} type={configTypes[field]} />
        ))}
        {plugins.map((plugin, index) => (
          <React.Fragment key={plugin}>
            <h3>{pluginNames[index]}</h3>
            {Object.keys(plugin.config || {}).map(field => (
              <Field key={field} name={field} type={plugin.config[field]} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
