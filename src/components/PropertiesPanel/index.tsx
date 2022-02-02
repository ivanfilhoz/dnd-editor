import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App';
import styles from './styles.module.css';

export default function PropertiesPanel() {
  const { canvas, setCanvas, selection } = useContext(AppContext)

  const current: any = selection != null
    ? canvas![selection] : null

  const [configTypes, setConfigTypes] = useState<any>({})

  const handleChange = (field: string) => (event: any) => {
    setCanvas!([
      ...canvas!.slice(0, selection!),
      {
        ...canvas![selection!],
        config: {
          ...(canvas![selection!]?.config || {}),
          [field]: event.target.value
        }
      },
      ...canvas!.slice(selection! + 1)
    ])
  }

  useEffect(() => {
    if (current?.component) {
      import(`../../ui-components/${current.component}`)
        .then(module => {
          setConfigTypes(module.config)
        })
    }
  }, [current, setConfigTypes])

  const renderField = (field: string) => {
    const type = configTypes[field]

    const commonProps: any = {
      name: field,
      value: current.config ? current.config[field] : null,
      onChange: handleChange(field)
    }

    if (Array.isArray(type)) {
      return <select {...commonProps}>
        {type.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    }

    if (type === 'number') {
      return <input type='number' {...commonProps} />
    }

    return <input type='text' {...commonProps} />
  }

  return <div className={styles.propertiesPanel}>
    <h2>Properties {current && `of ${current.component}`}</h2>
    <hr />
    <div className={styles.form}>
      {Object.keys(configTypes).map(field => (
        <div className={styles.field}>
          <label htmlFor={field}>{field}</label>
          {renderField(field)}
        </div>
      ))}
    </div>
    
  </div>;
}
