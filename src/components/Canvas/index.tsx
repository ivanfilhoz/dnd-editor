import React, { useCallback, useContext } from 'react';
import { useDrop } from 'react-dnd';
import { AppContext } from '../../App';
import CanvasItem from '../CanvasItem';
import styles from './styles.module.css';

export default function Canvas() {
  const { canvas, setCanvas } = useContext(AppContext)

  const handleDrop = useCallback((component: any) => {
    setCanvas!(canvas => [...canvas, component])
  }, [setCanvas])

  const [, dropRef] = useDrop(
    () => ({
      accept: 'toolitem',
      drop: handleDrop
    })
  )

  return <div ref={dropRef} className={styles.canvas}>
    {canvas!.map((item: any, index: any) => (
      <CanvasItem key={index} item={item} index={index} />
    ))}
  </div>;
}
