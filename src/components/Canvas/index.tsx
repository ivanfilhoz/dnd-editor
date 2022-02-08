import React from 'react'
import DropArea from '../DropArea'
import styles from './styles.module.css'

export default function Canvas () {
  return (
    <div className={styles.canvas}>
      <DropArea path='["root"]' />
    </div>
  )
}
