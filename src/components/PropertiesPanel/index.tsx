import React from 'react'
import useComponent from '../../util/useComponent'
import useSelection from '../../util/useSelection'
import styles from './styles.module.css'

export default function PropertiesPanel () {
  const { component, setComponent } = useSelection()
  const { config } = useComponent(component?.type)
  const configTypes: any = config || {}

  const handleChange = (field: string) => (event: any) => {
    setComponent({
      ...component,
      config: {
        ...(component.config || {}),
        [field]: event.target.value
      }
    })
  }

  const renderField = (field: string) => {
    const type = configTypes[field]

    const commonProps: any = {
      name: field,
      value: (component?.config && component.config[field]) || '',
      onChange: handleChange(field)
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

    return <input type='text' {...commonProps} />
  }

  return (
    <div className={styles.propertiesPanel}>
      <h2>Properties {component && `of ${component.type}`}</h2>
      <hr />
      <div className={styles.form}>
        {Object.keys(configTypes).map(field => (
          <div key={field} className={styles.field}>
            <label htmlFor={field}>{field}</label>
            {renderField(field)}
          </div>
        ))}
      </div>
    </div>
  )
}
