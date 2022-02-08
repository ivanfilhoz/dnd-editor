import React, { useContext } from 'react'
import { AppContext } from '../../App'
import styles from './styles.module.css'

export default function Result () {
  const { result } = useContext(AppContext)

  return <pre className={styles.pre}>{JSON.stringify(result, null, 2)}</pre>
}
