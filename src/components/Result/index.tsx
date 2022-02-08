import React, { useContext, useState } from 'react'
import { AppContext } from '../../App'
import usePublish from '../../util/usePublish'
import styles from './styles.module.css'

export default function Result () {
  const { result, setResult } = useContext(AppContext)
  const { publish, load } = usePublish()
  const [input, setInput] = useState('')
  const handleInput = event => setInput(event.target.value)

  const isValid = () => {
    try {
      JSON.parse(input)
      return true
    } catch (err) {
      return false
    }
  }

  const handlePublish = () => {
    publish()
    setTimeout(() => setInput(JSON.stringify(result, null, 2)), 200)
  }

  const handleLoad = () => {
    setResult(JSON.parse(input))
    setTimeout(() => load(), 200)
  }

  return (
    <>
      <button onClick={handlePublish}>Publish</button>
      <button onClick={handleLoad} disabled={!isValid()}>
        Load
      </button>
      <textarea className={styles.pre} value={input} onChange={handleInput} />
    </>
  )
}
