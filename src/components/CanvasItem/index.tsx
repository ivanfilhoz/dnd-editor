import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';
import styles from './styles.module.css';

export default function CanvasItem({ item, index }: any) {
  const { selection, setSelection, setCanvas } = useContext(AppContext)

  const handleClick = () => {
    setSelection!(index)
  }

  const Component = React.lazy(
    () => import(`../../ui-components/${item.component}`)
  )

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Delete' && selection === index) {
        setCanvas!((canvas => [
          ...canvas.slice(0, index),
          ...canvas.slice(index + 1)
        ]))
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [setCanvas, index, selection])

  return <div className={styles.canvasItem} onClick={handleClick}>
    <React.Suspense fallback=''>
      <Component config={item.config || {}} />
    </React.Suspense>
  </div>;
}
