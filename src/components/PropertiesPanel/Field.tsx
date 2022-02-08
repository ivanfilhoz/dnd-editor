import * as R from 'ramda'
import React from 'react'
import useSelection from '../../util/useSelection'
import styles from './styles.module.css'

export default function Field ({ name, type }: any) {
  const { component, setComponent } = useSelection()
  const value = component?.configuration && component.configuration[name]

  const handleChange = (value: any) => {
    setComponent(R.assocPath(['configuration', name], value, component))
  }

  const renderInput = () => {
    const commonProps: any = {
      name,
      value: value || '',
      onChange: (event: any) => handleChange(event.target.value)
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
          name={name}
          checked={!!value}
          onChange={(event: any) => handleChange(event.target.checked)}
        />
      )
    }

    return <input type='text' {...commonProps} />
  }

  return (
    <div className={styles.field}>
      <label htmlFor={name}>{name}</label>
      {renderInput()}
    </div>
  )
}
