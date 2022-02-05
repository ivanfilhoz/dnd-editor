import React from 'react'
import useComponent from '../../util/useComponent'
import usePlugins from '../../util/usePlugins'
import useSelection from '../../util/useSelection'
import styles from './styles.module.css'

export default function PropertiesPanel () {
  const { component, setComponent } = useSelection()
  const { config, description, plugins: pluginNames = [] } = useComponent(
    component?.type
  )
  const plugins = usePlugins(pluginNames)
  const configTypes: any = config || {}

  const handleChange = (field: string, value: any) => {
    setComponent({
      ...component,
      config: {
        ...(component.config || {}),
        [field]: value
      }
    })
  }

  const renderInput = (field: string, type: any) => {
    const commonProps: any = {
      name: field,
      value: (component?.config && component.config[field]) || '',
      onChange: (event: any) => handleChange(field, event.target.value)
    }

    if (Array.isArray(type)) {
      return (
        <select {...commonProps}>
          {type.map(option => (
            <option key={option}>{option}</option>
          ))}
        </select>
      )
    }

    if (type === 'number') {
      return <input type='number' {...commonProps} />
    }

    if (type === 'boolean') {
      return (
        <input
          type='checkbox'
          name={field}
          checked={!!(component?.config && component.config[field])}
          onChange={(event: any) => handleChange(field, event.target.checked)}
        />
      )
    }

    return <input type='text' {...commonProps} />
  }

  const Field = ({ field, type }: any) => (
    <div className={styles.field}>
      <label htmlFor={field}>{field}</label>
      {renderInput(field, type)}
    </div>
  )

  return (
    <div className={styles.propertiesPanel}>
      <h2>Properties {component && `of ${component.type}`}</h2>
      {description && <p>{description}</p>}
      <hr />
      <div className={styles.form}>
        {Object.keys(configTypes).map(field => (
          <Field key={field} field={field} type={configTypes[field]} />
        ))}
        {plugins.map((plugin, index) => (
          <React.Fragment key={plugin}>
            <h3>{pluginNames[index]}</h3>
            {Object.keys(plugin.config || {}).map(field => (
              <Field key={field} field={field} type={plugin.config[field]} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
